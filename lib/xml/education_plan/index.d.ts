import { IWTDocInfo, ObjectCodeNameBase, IWTPersonFillingBase, IWTAdminAccessBase, IWTCustomElemsBase, XmlElem, XmlMultiElem, IWTEducationPlanProgram, IDoc } from "..";

export interface IEducationPlan extends
  IWTDocInfo,
  ObjectCodeNameBase,
  IWTPersonFillingBase,
  IWTAdminAccessBase,
  IWTCustomElemsBase
{
  group_id?: XmlElem<number>;
  compound_program_id?: XmlElem<number>;
  type?: XmlElem<string>;
  person_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  tutor_id?: XmlElem<number>;
  update_status_and_activity?: XmlElem<boolean>;
  create_date?: XmlElem<Date>
  finish_date?: XmlElem<Date>
  last_activity_date?: XmlElem<Date>
  plan_date?: XmlElem<Date>
  mark?: XmlElem<number>
  event_id?: XmlElem<number>
  readiness_percent?: XmlElem<number>;
  state_id?: XmlElem<number>;
  last_state_id?: XmlElem<number>;
  programs?: XmlMultiElem<IWTEducationPlanProgram>;
  calculate_state_id?(): number;
  development_plan_id?: XmlElem<number>;
  budget_period_id?: XmlElem<number>;
  assessment_appraise_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  calculateMark?(): IDoc<IEducationPlan>;
}
