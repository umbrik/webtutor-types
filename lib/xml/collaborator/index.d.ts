import { IWTPersonBase, IWTPassportDataBase, IWTFileListBase, IWTCustomElemsBase, IWTFuncManagersBase, IWTPathSubBase, IWTKnowledgePartsBase, IWTKnowledgePartsBaseOld, IWTPersonObjectLinksBase, IWTDocInfo, IWTAccessBase, XmlElem, XmlMultiElem, IWTCollaboratorChangeLog, IWTCollaboratorHistoryState, IWTCollaboratorPersonalConfig, IWTCollaboratorCustomParam, IWTCollaboratorCompBen } from "..";

export interface ICollaborator extends
  IWTPersonBase,
  IWTPassportDataBase,
  IWTFileListBase,
  IWTCustomElemsBase,
  IWTFuncManagersBase,
  IWTPathSubBase,
  IWTKnowledgePartsBase,
  IWTKnowledgePartsBaseOld,
  IWTCustomElemsBase,
  IWTPersonObjectLinksBase,
  IWTDocInfo,
  IWTAccessBase
{
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  eid?: XmlElem<string>;
  name?: XmlElem<string>;
  fullname?(): string;
  position_id?: XmlElem<number>;
  position_name?: XmlElem<string>;
  position_parent_id?: XmlElem<number>;
  position_parent_name?: XmlElem<string>;
  org_id?: XmlElem<number>;
  org_name?: XmlElem<string>;
  change_password?: XmlElem<boolean>;
  is_candidate?: XmlElem<boolean>;
  is_outstaff?: XmlElem<boolean>;
  candidate_status_type_id?: XmlElem<number>;
  candidate_id?: XmlElem<number>;
  is_dismiss?: XmlElem<boolean>;
  hire_date?: XmlElem<Date>;
  dismiss_date?: XmlElem<Date>;
  position_date?: XmlElem<Date>;
  in_request_black_list?: XmlElem<boolean>;
  request_black_list_data?: XmlElem<Date>;
  request_black_list_comment?: XmlElem<string>;
  place_id?: XmlElem<number>;
  region_id?: XmlElem<number>;
  cost_center_id?: XmlElem<number>;
  lng_id?: XmlElem<string>;
  location_id?: XmlElem<string>;
  pict_url?: XmlElem<string>;
  access_time_start?: XmlElem<string>;
  access_time_end?: XmlElem<string>;
  /** Проверяет доступ пользователя к порталу на текущий момент */
  is_time_access?(): boolean;
  /** Описание */
  desc?: XmlElem<string>;
  disp_empty_fields?: XmlElem<boolean>;
  disp_personal_info?: XmlElem<boolean>;
  disp_login?: XmlElem<boolean>;
  disp_sex?: XmlElem<boolean>;
  disp_desc?: XmlElem<boolean>;
  disp_files?: XmlElem<boolean>;
  disp_birthdate?: XmlElem<boolean>;
  disp_birthdate_year?: XmlElem<boolean>;
  disp_resume?: XmlElem<boolean>;
  allow_personal_chat_request?: XmlElem<boolean>;
  personal_chat_confirmation_required?: XmlElem<boolean>;
  development_potential_id?: XmlElem<number>;
  efficiency_estimation_id?: XmlElem<number>;
  web_enter_date?: XmlElem<Date>;
  category_id?: XmlMultiElem<string>;
  change_logs?: XmlMultiElem<IWTCollaboratorChangeLog>;
  current_state?: XmlElem<string>;
  history_states?: XmlMultiElem<IWTCollaboratorHistoryState>;
  personal_config?: XmlElem<IWTCollaboratorPersonalConfig>;
  last_import_date?: XmlElem<Date>;
  custom_params?: XmlMultiElem<IWTCollaboratorCustomParam>;
  level_id?: XmlElem<number>;
  comp_ben?: XmlElem<IWTCollaboratorCompBen>;
  gdpr?: XmlElem<boolean>;
  clear_cur_position?(): undefined;
  row_disp_elem?: XmlElem<string>;
  row_list_field?: XmlElem<string>;
  row_key_field?: XmlElem<string>;
  start_action?(type: string): number;
  set_basic_position?(positionId: number): boolean;
  get_courses?(type: string): XmlMultiElem<any>
  get_tests?(type: string): XmlMultiElem<any>;
  assign_course?(courseId: number, startDate: Date, endDate: Date, eventId: number): number;
  assign_test?(assessmentId: number, startDate: Date, endDate: Date, eventId: number): number;
  get_info?(): any;
  get_events?(type: string, status: string, role: string): XmlMultiElem<any>;
  get_groups?(): XmlMultiElem<any>;
  get_event_results?(): XmlMultiElem<any>;
  update_info?(lastname: string, firstname: string, middlename: string, address: string, phone: string, email: string, login: string, password: string): any;
  clear_subs_fields?(): undefined;
}
