interface CareerReserveTutor extends PersonFillingBase {
  person_id?: XmlElem<number>;
  is_native?: XmlElem<boolean>;
  boss_type_id?: XmlElem<number>;
  is_responsible?: XmlElem<boolean>;
  comment?: XmlElem<string>;
}

interface CareerReserveTaskCommissionPerson extends PersonFillingBase {
  person_id?: XmlElem<number>;
  score?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface CareerReserveTask extends CustomElemsBase, FileListBase {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  status?: XmlElem<string>;
  parent_task_id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  plan_date?: XmlElem<Date>;
  fact_date?: XmlElem<Date>;
  start_edit_date?: XmlElem<Date>;
  typical_development_program_id?: XmlElem<number>;
  tutor_id?: XmlElem<number>;
  competence_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  score?: XmlElem<number>;
  person_comment?: XmlElem<string>;
  tutor_comment?: XmlElem<string>;
  object_type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  active_test_learning_id?: XmlElem<number>;
  event_id?: XmlElem<number>;
  event_result_id?: XmlElem<number>;
  education_plan_id?: XmlElem<number>;
  active_learning_id?: XmlElem<number>;
  assessment_appraise_id?: XmlElem<number>;
  assessment_appraise_result_id?: XmlElem<number>;
  poll_result_id?: XmlElem<number>;
  poll_procedure_id?: XmlElem<number>;
  type_document?: XmlElem<string>;
  link_document?: XmlElem<string>;
  forbid_task_portal_edit?: XmlElem<boolean>;
  commission_persons?: XmlMultiElem<CareerReserveTaskCommissionPerson>;
}

interface CareerReserveViewTutor {
  person_id?: XmlElem<number>;
}

interface CareerReserveView extends DescBase, DevelopmentPlanDataBase {
  part_index?: XmlElem<number>;
  tab_page?: XmlElem<string>;
  dev_tab_page?: XmlElem<string>;
  tutors?: XmlMultiElem<CareerReserveViewTutor>;
}

interface CareerReserveTopElem extends XmlTopElem<CareerReserveDocument>, FileListBase, AdminAccessBase, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  plan_readiness_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  readiness_percent?: XmlElem<number>;
  autocalculate_readiness_percent?: XmlElem<boolean>;
  personnel_reserve_id?: XmlElem<number>;
  status?: XmlElem<string>;
  position_type?: XmlElem<string>;
  position_name?: XmlElem<string>;
  position_id?: XmlElem<number>;
  position_common_id?: XmlElem<number>;
  staff_position_id?: XmlElem<number>;
  subdivision_id?: XmlElem<number>;
  current_competence_profile_id?: XmlElem<number>;
  target_competence_profile_id?: XmlElem<number>;
  development_plan_id?: XmlElem<number>;
  forbid_tasks_edit?: XmlElem<boolean>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  tutors?: XmlMultiElem<CareerReserveTutor>;
  tasks?: XmlMultiElem<CareerReserveTask>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<CareerReserveView>;
  name?(): any;
  get_linked_position_common_id?(): any;
  assign_typical_program?(): any;
  set_task?(): any;
  change_tutors_list?(): any;
}

type CareerReserveDocument = XmlDocument<CareerReserveTopElem>;
