import { IWTDocInfo, XmlElem, XmlMultiElem, IWTRemoteApplicationCredential } from "..";

export interface IRemoteApplication extends IWTDocInfo {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  app_id?: XmlElem<string>;
  credentials?: XmlMultiElem<IWTRemoteApplicationCredential>;
  category_id?: XmlElem<string>;
  comment?: XmlElem<string>;
}
