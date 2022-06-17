import { IWTDocumentTopElem, IWTPersonFillingBase, IWTDocInfo, IWTCustomElemsBase, IWTAdminAccessBase, XmlElem, IWTLearningPartBase } from "..";

interface IWTLearningTopElem extends
  IWTDocumentTopElem,
  IWTPersonFillingBase,
  IWTDocInfo,
  IWTCustomElemsBase,
  IWTAdminAccessBase
{
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  course_id?: XmlElem<number>;
  course_name?: XmlElem<string>;
  course_code?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_current_state?: XmlElem<string>;
  event_id?: XmlElem<number>;
  event_name?: XmlElem<string>;
  event_start_date?: XmlElem<Date>;
  group_id?: XmlElem<number>;
  education_plan_id?: XmlElem<number>;

  parts?: [{
    part?: IWTLearningPartBase
  }]

  no_encoding_core_lesson?: XmlElem<boolean>;
  time?: XmlElem<number>;

  events?: [{
    event_id?: XmlElem<number>;
    score?: XmlElem<number>;
  }]

  start_usage_date?: XmlElem<Date>;
  start_learning_date?: XmlElem<Date>;
  is_self_enrolled?: XmlElem<boolean>;
  last_usage_date?: XmlElem<Date>;
  max_end_date?: XmlElem<Date>;
  base_url?: XmlElem<string>;
  score?: XmlElem<number>;
  text_result?: XmlElem<string>;
  state_id?: XmlElem<number>;
  active_learning_id?: XmlElem<number>;
  active_learning_deleted?: XmlElem<boolean>;
  use_proctoring?: XmlElem<boolean>;
  comment?: XmlElem<string>;
}
