export type CoachType = {
    id: number;
    firstName: string;
    lastName: string;
    name: string;
    dateOfBirth: string;
    nationality: string;
    contract: {
        start: string;
        until: string;
    }
};

export type PlayerType = {
    id: number;
    name: string;
    position: string;
    dateOfBirth: string;
    nationality: string;
};