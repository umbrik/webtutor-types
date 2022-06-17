import { IWTCustomElemsBase, IWTDocInfo, IWTNotificationTemplateMainObject, XmElem, XmlElem, XmlMultiElem } from "..";

export interface INotificationTemplate extends
  IWTCustomElemsBase,
  IWTDocInfo
{
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  main_object?: XmElem<IWTNotificationTemplateMainObject>;
  add_text_to_edit?: Function;
  comment?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;
}
