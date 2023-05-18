import { UserInterface } from '../../../shared/models';

export interface CalendarInterface {
  id: number;
  title: string;
  url: string;
  startDate: string;
  endDate: string;
  color: string;
  ownerId: number
  participants?: ParticipantInterface[];
}

export interface ParticipantInterface {
  user: Pick<UserInterface, 'id' | 'firstName' | 'lastName' | 'avatarUrl'>;
  permission: PermissionType;
}

export type PermissionType = 'READ' | 'WRITE';
