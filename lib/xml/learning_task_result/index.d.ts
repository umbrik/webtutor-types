import { IWTPersonFillingBase, IWTFileListBase, IWTCustomElemsBase, XmlElem } from "..";

declare interface ILearningTaskResult extends
  IWTPersonFillingBase,
  IWTFileListBase,
  IWTCustomElemsBase
{
  learning_task_id?: XmlElem<number>;
  learning_task_name?: XmlElem<string>;
  person_id?: XmlElem<number>;
  status_id?: XmlElem<string>;
  answer?: XmlElem<string>;
  expert_id?: XmlElem<number>;
  expert_comment?: XmlElem<string>;
  mark?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  plan_start_date?: XmlElem<Date>;
  plan_end_date?: XmlElem<Date>;
}
