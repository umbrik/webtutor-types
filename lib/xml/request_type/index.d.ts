import { IWTAccessDocBase, IWTDocInfoBase, IWTObjectCodeNameBase, IWTWebVariablesBase, XmlElem, XmlMultiElem } from "..";

export interface IRequestType extends
  IWTObjectCodeNameBase,
  IWTWebVariablesBase
{
  object_type?: XmlElem<string>;
  is_group?: XmlElem<boolean>;
  is_can_be_group?: XmlElem<boolean>;
  is_can_be_add_youself?: XmlElem<boolean>;
  hide_portal_comment?: XmlElem<boolean>;
  forbid_rejection?: XmlElem<boolean>;
  forbid_copy?: XmlElem<boolean>;
  boss_only?: XmlElem<boolean>;
  show_all?: XmlElem<boolean>;
  ignore_black_list?: XmlElem<boolean>;
  workflow_id?: XmlElem<number>;
  create_message?: XmlElem<string>;
  use_standart_processing?: XmlElem<boolean>;
  processing_code?: XmlElem<string>;
  reject_processing_code?: XmlElem<string>;
  request_custom_web_template_id?: XmlElem<number>;
  reject_redirect_url?: XmlElem<string>;
  remote_action_id?: XmlElem<number>;
  access?: XmlElem<IWTAccessDocBase>;
  is_std?: XmlElem<boolean>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  comment?: XmlElem<string>;
  desc?: XmlElem<string>;
  disp_block?: XmlElem<any>;
  role_id?: XmlMultiElem<number>;
}
