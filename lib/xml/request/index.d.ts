import { IWTCustomElemsBase, IWTDocInfo, IWTFileListBase, IWTKnowledgePartsBase, IWTPersonFillingBase, IWTRequestGroup, IWTRequestPerson, IWTRequestWorkflowMatching, IWTWorkflowDataBase, XmlElem, XmlMultiElem } from "..";

export interface IRequest extends
  IWTPersonFillingBase,
  IWTKnowledgePartsBase,
  IWTWorkflowDataBase,
  IWTDocInfo,
  IWTFileListBase,
  IWTCustomElemsBase
{
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  request_type_id?: XmlElem<number>;
  budget_period_id?: XmlElem<number>;
  type?: XmlElem<string>;
  status_id?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  close_date?: XmlElem<Date>;
  plan_close_date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  object_code?: XmlElem<string>;
  object_start_date?: XmlElem<Date>;
  object_type?: XmlElem<string>;
  is_group?: XmlElem<boolean>;
  persons?: XmlMultiElem<IWTRequestPerson>;
  person_num?(): number;
  groups?: XmlMultiElem<IWTRequestGroup>;
  workflow_matchings?: XmlMultiElem<IWTRequestWorkflowMatching>
  workflow_matching_type?: XmlElem<string>;
  comment?: XmlElem<string>;
}
