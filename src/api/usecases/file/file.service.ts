import prismaClient from "@utils/prismaUtils";

const { team } = prismaClient;

const uploadTeamAvatar = async (avatar: string, teamId: string) => {
    const updatedTeam = await team.update({
        where: { id: teamId },
        data: { avatar },
    });
    
    return updatedTeam;
};

const fileService = {
    uploadTeamAvatar,
};

export default fileService;