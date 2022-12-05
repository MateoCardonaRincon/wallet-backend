export interface ClientInterface {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    photo: string;
    state: number;
    createdAt: Date;
    deletedAt: Date | null;
}