import { IWTCustomElemsBase, IWTDocInfo, XmlElem, XmlMultiElem, IWTNotificationRecipient, IWTNotificationNotificationSystem } from "..";

export interface INotification extends
  IWTCustomElemsBase,
  IWTDocInfo
{
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  recipients?: XmlMultiElem<IWTNotificationRecipient>;
  field_recipient_type?: XmlElem<string>;
  notification_systems?: XmlMultiElem<IWTNotificationNotificationSystem>;
  active?: XmlElem<boolean>;
  is_std?: XmlElem<boolean>;
  notification_template_id?: XmlElem<number>;
  date_shift_selector?: XmlElem<number>;
  date_shift?: XmlElem<number>;
  sender_selector?: XmlElem<number>;
  sender_email?: XmlElem<string>;
  comment?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;
}
