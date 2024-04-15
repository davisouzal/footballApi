import { AreaType } from "./areaType";
import { CompetitionType } from "./competitionType";
import { PlayerType, CoachType } from "./personType";

export type TeamType = {
    area: AreaType;
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
    runningCompetitions: CompetitionType[];
    coach: CoachType;
    squad: PlayerType[];
    staff: string[];
    lastUpdated: string;
};
