export type ILoginResponse = {
    results: ILoginResponseResults;
    msg: string;
};

export type ILoginResponseResults = {
    _id: string;
    user_name: string;
    email: string;
    date_of_birth: string | null;
    gender: string | null;
    phone_number: string | null;
    is_verified_email: boolean;
    token: string;
    refresh_token: string;
};