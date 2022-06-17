import { IWTObjectCodeNameBase, IWTEducGroupsBase, IWTFuncManagersBase, IWTCustomElemsBase, IWTDocumentPersonsBase, IWTRequirementsBase, IWTKnowledgePartsBase, IWTKnowledgePartsBaseOld, IWTViewConditionsBase, IWTPersonObjectLinksBase, XmlElem, XmlMultiElem, IWTGroupCollaborator, IWTDocInfoBase, IWTAccessDocBase } from "..";

interface IGroup extends
  IWTObjectCodeNameBase,
  IWTEducGroupsBase,
  IWTFuncManagersBase,
  IWTCustomElemsBase,
  IWTDocumentPersonsBase,
  IWTRequirementsBase,
  IWTKnowledgePartsBase,
  IWTKnowledgePartsBaseOld,
  IWTViewConditionsBase,
  IWTPersonObjectLinksBase
{
  show_detailed?: XmlElem<boolean>;
  is_dynamic?: XmlElem<boolean>;
  is_educ?: XmlElem<boolean>;
  is_hidden?: XmlElem<boolean>;
  allow_social_post?: XmlElem<boolean>;
  collaborators?: XmlMultiElem<IWTGroupCollaborator>;
  person_num?(): any
  forum_id?: XmlElem<number>;
  kpi_profile_id?: XmlElem<number>;
  bonus_profile_id?: XmlElem<number>;
  schedule_type_id?: XmlElem<number>;
  join_mode?: XmlElem<string>;
  default_request_type_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  access?: XmlElem<IWTAccessDocBase>;
  desc?: XmlElem<string>;
  dynamic_select_person?(_clear_list: any): any
  start_action?(_item_name: any): any
  activateCourseToPersons?(oInputParam: any): any
  add_collaborator?(iPersonIdParam: number, docPersonParam?: any): any
  remove_collaborator?(iPersonIdParam: number): any
  role_id?: XmlMultiElem<number>;
}
