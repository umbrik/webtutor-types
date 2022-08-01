interface Env {
  /**
   * Текущий сайт пользователя с которым он взаимодействует
   */
  curSite: SiteDocumentTopElem;
  /**
   * ID текущего пользователя
   */
  curUserID: number;
  /**
   * Объект пользователя
   */
  curUser: CollaboratorDocumentTopElem;
}
