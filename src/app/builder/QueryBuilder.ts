
import { FilterQuery, Query, Types } from 'mongoose';

class QueryBuilder<T> {
    public modelQuery: Query<T[], T>;
    public query: Record<string, unknown>;

    constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
        this.modelQuery = modelQuery;
        this.query = query;
    }

    search(searchableFields: string[]) {
        const search = (this?.query?.search as string)?.trim();

        if (search) {
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map(
                    (field) =>
                        ({
                            [field]: { $regex: search, $options: 'i' },
                        }) as FilterQuery<T>,
                ),

            });

        }

        return this;
    }


    filter() {
        const queryObj = { ...this.query };

        // Filtering
        const excludeFields = ['search', 'sortBy', 'sortOrder', 'fields', 'filter'];

        excludeFields.forEach((el) => delete queryObj[el]);

        this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);

        return this;
    }

    filterByAuthor() {
        const authorId = this.query?.filter;
        // console.log(authorId);
        

        if (authorId) {
           
            if (Types.ObjectId.isValid(authorId as string)) {
                this.modelQuery = this.modelQuery.find({ 'author._id': new Types.ObjectId(authorId as string) });
            } else {
                this.modelQuery = this.modelQuery.find({});
            }
        }

        return this;
    }

    sort() {
        let sortStr: string | undefined;

        if (this?.query?.sortBy && this?.query?.sortOrder) {
            const sortBy = this.query?.sortBy as string;
            const sortOrder = this.query?.sortOrder as string;

            sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`;
        }

        if (!sortStr && this.query?.sortBy) {
            const sortBy = this.query?.sortBy as string;
            sortStr = `${sortBy}`;
        } else if (!sortStr) {
            sortStr = '-createdAt';
        }

        if (sortStr) {
            this.modelQuery = this.modelQuery.sort(sortStr);
        }

        return this;
    }

    fields() {
        const fields =
            (this?.query?.fields as string)?.split(',')?.join(' ') || '-__v';

        this.modelQuery = this.modelQuery.select(fields);
        return this;
    }


}

export default QueryBuilder;