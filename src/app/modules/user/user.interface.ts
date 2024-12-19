
export type TUserName = {
    firstName: string;
    middleName?: string | undefined;
    lastName: string;
};

export type TUser = {
    name: TUserName;
    email: string;
    password: string;
    role: 'admin' | 'user';
    // status: 'in-progress' | 'blocked';
    isDeleted: boolean;
};