import { MediaLink } from './media-link'

export interface User {
  uid: string
  username: string
  createdISO: string
  profileMedia: MediaLink
  lastOpenedAppISO: string
  isBanned: boolean
  isDeleted: boolean
  phoneNumber: string
  /**
   * The user who reported this user + why.
   */
  reports: { [userUid: string]: string }
}
