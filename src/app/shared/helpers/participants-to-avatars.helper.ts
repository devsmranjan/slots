import { ParticipantInterface } from '../../features/calendar/models';
import { AvatarInterface } from '../models';

export function getAvatarsByParticipants(participants: ParticipantInterface[] | undefined) {
  const avatars: AvatarInterface[] = [];

  if (participants === undefined || participants === null) return avatars;

  participants.forEach((participant) => {
    avatars.push({
      id: participant.user.id,
      imageUrl:
        participant.user?.avatarUrl ??
        'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
      imageAlt: `${participant.user.firstName} ${participant.user.lastName}`,
    });
  });

  return avatars;
}
