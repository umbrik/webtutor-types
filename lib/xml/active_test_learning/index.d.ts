import { IWTLearningAssessmentBase, IWTPersonFillingBase, IWTLearningCurrentStateBase, IWTLastAttemptTestLearningsBase, XmlElem } from "..";

export interface IActiveTestLearning extends
  IWTLearningAssessmentBase,
  IWTPersonFillingBase,
  IWTLearningCurrentStateBase,
  IWTLastAttemptTestLearningsBase
{
  code?: XmlElem<string>;
  activation_code?: XmlElem<string>;
  name?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_current_state?: XmlElem<string>;
  event_id?: XmlElem<number>;
  event_name?: XmlElem<string>;
  event_start_date?: XmlElem<Date>;
  education_plan_id?: XmlElem<number>;
  group_id?: XmlElem<number>;
  duration?: XmlElem<number>;
  attempts_num?: XmlElem<number>;
  state_id?: XmlElem<number>;
  lesson_location?: XmlElem<string>;
  score?: XmlElem<number>;
  score_str?: XmlElem<string>;
  core_lesson?: XmlElem<string>;
  lesson_report?: XmlElem<string>;
  start_usage_date?: XmlElem<Date>;
  start_learning_date?: XmlElem<Date>;
  last_usage_date?: XmlElem<Date>;
  max_end_date?: XmlElem<Date>;
  time?: XmlElem<number>;
  max_score?: XmlElem<number>;
  assessment_appraise_id?: XmlElem<number>;
  question_num?: XmlElem<number>;
  no_encoding_core_lesson?: XmlElem<boolean>;
  use_proctoring?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  complete_test?(): number;
}
