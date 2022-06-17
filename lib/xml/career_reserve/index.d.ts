import { IWTCustomElemsBase, XmlElem, XmlMultiElem, IWTCareerReserveTutor, IWTCareerReserveTask } from "..";

interface ICareerReserve extends
  IWTCustomElemsBase
{
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  plan_readiness_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  readiness_percent?: XmlElem<number>;
  personnel_reserve_id?: XmlElem<number>;
  status?: XmlElem<string>;
  person_id?: XmlElem<number>;
  position_type?: XmlElem<string>;
  position_name?: XmlElem<string>;
  position_id?: XmlElem<number>;
  position_common_id?: XmlElem<number>;
  staff_position_id?: XmlElem<number>;
  subdivision_id?: XmlElem<number>;
  tutors?: XmlMultiElem<IWTCareerReserveTutor>;
  current_competence_profile_id?: XmlElem<number>;
  target_competence_profile_id?: XmlElem<number>;
  development_plan_id?: XmlElem<number>;
  forbid_tasks_edit?: XmlElem<boolean>;
  tasks?: XmlMultiElem<IWTCareerReserveTask>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;

  /**
   * Возвращает ID типовой должности
   * @returns {number|undefined}
   */
  get_linked_position_common_id?(): number | undefined;

  /**
   * Назначает задания из типовой программы развития
   * @param {number} typicalDevelopmentProgramId ID типовой программы развития
   */
  assign_typical_program?(typicalDevelopmentProgramId: number): undefined;
  set_task?(task: IWTCareerReserveTask, typicalDevelopmentProgramId: number, parentTaskId: string): any;
  change_tutors_list?(): void;
}
