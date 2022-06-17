import { ICollaborator } from "./collaborator";


interface IWTCommonEventStatusType {
  id: string;
  name: string;
  text_color: string;
  bk_color: string;
}

declare interface common extends Object {
  request_status_types: XmlMultiElem<IWTCommonEventStatusType>;
  event_status_types: XmlMultiElem<IWTCommonEventStatusType>;
  learning_states: XmlMultiElem<any>;
  resource_types: XmlMultiElem<any>;
  exchange_object_types: XmlMultiElem<any>;
  education_learning_states: XmlMultiElem<any>;
  career_reserve_status_types: XmlMultiElem<any>;
  career_reserve_tasks_types: XmlMultiElem<any>;
  learning_task_status_types: XmlMultiElem<any>;
}

declare var common: common;

interface categorys extends Object {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

declare var categorys: categorys;

declare var DefaultDb: string;

export interface XmElem<T> {
  /**
   * Значение XmlElem поля
   */
  Value: T;

  /**
   * Проверка на существование значения у XmlElem
   */
  HasValue: boolean;

  /**
   * Получение связного списка с текущим XmlElem.
   * Если связанного списка не получить, то вызов свойства гененрирует ошибку
   */
  ForeignElem: any;

  OptForeignElem: any;
  Name: string;
  PrimaryKey?: XmlElem<any>;
  Clear(): void;
}

interface XmMultiElem<T> {
  [index: number]: T;
  HasValue: boolean;
  Name: string;
  /**
   * 
   * Добавляет дочерний элемент и возвращает указатель на него.
   * Если текущий элемент создан по форме, то он должен быть простым массивом. При этом аргументы для вызова функции не требуются.
   * Если текущий элемент является динамическим (т.е. построенным без формы), то добавляется дочерний динамический элемент с именем и типом, указанных в качестве аргументов.   

   * @param {string} name - имя дочернего элемента (String). Необязательный аргумент
   * @param {string} type - тип дочернего элемента (String). Необязательный аргумент
   * @returns {XmlElem<T>}
   */
  Add(): XmlElem<T>;
  AddChild(name?: string, type?: string): XmlElem<T>;
  AssignElem(element: unknown): void;
  ByValueExists(value: unknown): Boolean;
  Child(index: string | number): XmlElem<T>;
  Clear(): void;
  DeleteChildByKey(keyValue: unknown, keyName?: string): void;
  DeleteChildren(condition: string): void;
  GetChildByKey(keyValue: unknown, keyName?: string): XmlElem<T>;
  GetOptChildByKey(keyValue: unknown, keyName?: string): XmlElem<T>;
  ObtainByValue(value: any): XmlElem<T>;
  ObtainChildByKey(keyValue: unknown, keyName?: string): XmlElem<T>;
  OptChild(name: string): XmlElem<T>;
}

export type XmlElem<T> = XmElem<T> & T;
export type XmlMultiElem<T> = XmMultiElem<T> & T;

export interface IDoc<T> {
  DocID: number;
  TopElem: ITopElem<T>;
  Save(): undefined;
  BindToDb(databaseName?: string): undefined;
  WriteDocInfo: boolean;
}

export type ITopElem<T> = T & {
  Name: string;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  Doc: IDoc<T>;
  role_id?: XmlMultiElem<number>;
  doc_info?: XmlElem<IWTDocInfo>;
  OptChild(childName: string): any;
  AssignElem(TopElem: ITopElem<unknown>): void;
  EvalPath(pathName: string): XmlElem<any> | XmlMultiElem<any> | never;
  tags?: XmlMultiElem<IWTKnowledgePartsBaseTag>;
  access?: XmlElem<IWTAccessDocBase>;
}

interface IWTAdminAccessBase {
  user_access_role?: XmlElem<string>;
  user_group_id?: XmlElem<number>;
}

interface ObjectCodeNameBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
}

interface IWTVDialogEditTextTopElem {
  url?: XmlElem<string>;
  desc?: XmlElem<string>;
  title?: XmlElem<string>;
  is_rich?: XmlElem<boolean>;
}
interface IWTDialogNotificationTemplateRecipient {
  recipient_type?: XmElem<string>;
  func_manager_type_id?: XmElem<number>;
  eval_str?: XmElem<string>;
  eval_ids_str?: XmElem<string>;
  notification_template_id?: XmElem<number>;
}

interface IWTDialogNotificationTemplateAttachment {
  name?: XmElem<string>;
  data?: XmElem<string>;
}

interface IWTDialogNotificationTemplateTopElem {
  subject?: XmElem<string>;
  body?: XmElem<string>;
  body_type?: XmElem<string>;
  notification_template_id?: XmElem<number>;
  sender_selector?: XmElem<number>;
  sender_email?: XmElem<string>;
  recipients?: XmMultiElem<IWTDialogNotificationTemplateRecipient>;
  attachments?: XmMultiElem<IWTDialogNotificationTemplateAttachment>;
  notification_system_id?: XmElem<number>;
}

interface IWTWebVariableBaseWvarEntry {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  catalog?: XmlElem<string>;
}

interface IWTWebVariableBaseWvar {
  name?: XmlElem<string>;
  parent_wvar_name?: XmlElem<string>;
  value?: XmlElem<string>;
  type?: XmlElem<string>;
  catalog?: XmlElem<string>;
  entries?: XmlMultiElem<IWTWebVariableBaseWvarEntry>;
  description?: XmlElem<string>;
  is_modify?: XmlElem<boolean>;
  position?: XmlElem<number>;
}

interface IWTWebVariablesBase {
  wvars?: XmlMultiElem<IWTWebVariableBaseWvar>;
  wvars_selector?: XmlElem<string>;
  wvars_num?: number;
}

interface IWTViewConditionBase {
  top_elem?: XmlElem<string>;
  field?: XmlElem<string>;
  title?: XmlElem<string>;
  value?: XmlElem<string>;
  type?: XmlElem<string>;
  option_type?: XmlElem<string>;
  is_custom_field?: XmlElem<boolean>;
  and_or?: XmlElem<string>;
  is_multiple?: XmlElem<boolean>;
  value_multiple?: XmlMultiElem<string>;
  bracket?: XmlElem<string>;
}

interface IWTViewConditionsBase {
  conditions?: XmlMultiElem<IWTViewConditionBase>;
  conditions_qual?: XmlElem<string>;
}

interface IWTTypicalDevelopmentProgramTask {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  due_date: XmlElem<number>;
  start_edit_days: XmlElem<number>;
  parent_task_id: XmlElem<string>;
  duration_days: XmlElem<number>;
  desc: XmlElem<string>;
  object_type: XmlElem<string>;
  object_id: XmlElem<number>;
  auto_appoint_learning: XmlElem<boolean>;
  type_document: XmlElem<string>;
  link_document: XmlElem<string>;
  forbid_task_portal_edit: XmlElem<boolean>;
}

interface IWTTypicalDevelopmentProgramTopElem extends IWTDocInfo {
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  tasks?: XmlMultiElem<IWTTypicalDevelopmentProgramTask>;
}

interface IWTAppointmentTypeTopElem extends ObjectCodeNameBase, IWTAdminAccessBase, IWTDocInfo {
  comment?: XmlElem<string>;
}

interface IWTLearningSection {
  id?: XmlElem<string>;
  title?: XmlElem<string>;
  score?: XmlElem<number>;
}

interface IWTTutorTopElem extends
  IWTPersonFillingBase,
  IWTFileListBase,
  IWTAdminAccessBase,
  IWTCustomElemsBase
{
  code?: XmlElem<string>;
  person_id?: XmlElem<number>;
  career_reserve_type_id?: XmlElem<number>;
  status?: XmlElem<string>;
  lastname?: XmlElem<string>;
  firstname?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  position_commons?: XmlMultiElem<any>;
  access?: XmlElem<IWTAccessDocBase>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
}

interface IWTTimeZoneTopElem {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  offset?: XmlMultiElem<XmlElem<number>>;
  is_rus?: XmlMultiElem<XmlElem<boolean>>;
  is_default?: XmlElem<boolean>;
}

interface IWTLearningSection {
  id?: XmlElem<string>;
  title?: XmlElem<string>;
  score?: XmlElem<number>;
}

interface IWTTestLearningTopElem extends
  IWTAnnalsNumsBase,
  IWTAdminAccessBase,
  IWTDocInfo,
  IWTPersonFillingBase
{
  id?: XmlElem<number>;
  assessment_id?: XmlElem<number>;
  assessment_name?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_current_state?: XmlElem<string>;
  event_id?: XmlElem<number>;
  group_id?: XmlElem<number>;
  sections?: XmlMultiElem<IWTLearningSection>;
  start_usage_date?: XmlElem<Date>;
  start_learning_date?: XmlElem<Date>;
  last_usage_date?: XmlElem<Date>;
  max_end_date?: XmlElem<Date>;
  score?: XmlElem<number>;
  text_result?: XmlElem<string>;
  state_id?: XmlElem<number>;
  time?: XmlElem<number>;
  max_score?: XmlElem<number>;
  education_plan_id?: XmlElem<number>;
  assessment_appraise_id?: XmlElem<number>;
  active_test_learning_id?: XmlElem<number>;
  creation_date?: XmlElem<Date>;
  creation_user_id?: XmlElem<number>;
  modification_date?: XmlElem<Date>;
  modification_user_id?: XmlElem<number>;
  app_instance_id?: XmlElem<string>;
  use_proctoring?: XmlElem<boolean>;
}

interface IWTSubdivisionGroupSubdivisions {
  subdivision_id?: XmlElem<number>;
  subdivision_name?: XmlElem<string>;
}

interface IWTSubdivisionGroupTopElem extends
  IWTDocInfo,
  IWTKnowledgePartsBase
{
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  is_dynamic?: XmlElem<boolean>;
  subdivisions?: XmlMultiElem<IWTSubdivisionGroupSubdivisions>;
  comment?: XmlElem<string>;
  desc?: XmlElem<string>;
  dynamic_select_person?(clearList?: boolean): void;
}

interface IWTOutstaffPeriodsBase {
  periods?: XmlMultiElem<any>;
  materials?: XmlMultiElem<any>;
}

interface IWTObjectCodeNameBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
}

interface IWTSubdivisionTopElem extends
  IWTObjectCodeNameBase,
  IWTFileListBase,
  IWTFuncManagersBase,
  IWTKnowledgePartsBase,
  IWTKnowledgePartsBaseOld,
  IWTCustomElemsBase,
  IWTDocumentPersonsBase
{
  org_id?: XmlElem<number>;
  parent_object_id?: XmlElem<number>;
  is_disbanded?: XmlElem<boolean>;
  lng_id?: XmlElem<string>;
  location_id?: XmlElem<string>;
  access_time_start?: XmlElem<string>;
  access_time_end?: XmlElem<string>;
  show_detailed?: XmlElem<boolean>;
  show_children?: XmlElem<boolean>;
  place_id?: XmlElem<number>;
  region_id?: XmlElem<number>;
  kpi_profile_id?: XmlElem<number>;
  bonus_profile_id?: XmlElem<number>;
  schedule_type_id?: XmlElem<number>;
  formed_date?: XmlElem<Date>;
  disbanded_date?: XmlElem<Date>;
  cost_center_id?: XmlElem<number>;
  is_faculty?: XmlElem<boolean>;
  outstaff?: XmlElem<IWTOutstaffPeriodsBase>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  start_action?(): any
}

interface IWTSpxmlUnibridgeConfig {
  appSettings?: XmlMultiElem<XmlElem<any>>;
}

interface IWTSiteTopElem extends
  IWTObjectCodeNameBase,
  IWTFuncManagersBase,
  IWTCustomElemsBase
{
  title?: XmlElem<string>;
  html_header?: XmlElem<string>;
  html_icon_href?: XmlElem<string>;
  web_design_id?: XmlElem<number>;
  lng_id?: XmlElem<string>;
  owner_objects?: XmlMultiElem<any>;
  menus?: XmlMultiElem<any>;
  web_designs?: XmlMultiElem<any>;
  first_unauthorized_url?: XmlElem<string>;
  first_authorized_url?: XmlElem<string>;
  anonym_collaborator_id?: XmlElem<number>;
  anonymous_modes?: XmlMultiElem<any>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  is_std?: XmlElem<boolean>;
}

interface IWTSession extends Object {
  Env: IWTEnv;
  sid: number;
}

interface IWTServerAgentTopElem {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  obj?: XmlElem<any>;
  block?: XmlElem<string>;
  type?: XmlElem<string>;
  run_code_url?: XmlElem<string>;
  run_code?: XmlElem<string>;
  run_agent?(iObjectIDParam: any, sObjectsIDsParam: any, sTenancyNameParam: string, dDateParam: Date): boolean;
  discharge_id?: XmlElem<number>;
  user_assignment_id?: XmlElem<number>;
  import_excel_person_scheme_id?: XmlElem<string>;
  import_excel_id?: XmlElem<number>;
  exchange_server_id?: XmlElem<number>;
  is_std?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  converter?: XmlElem<boolean>;
}

interface ResponseTopElem {
  code?: XmlElem<string>;
  response_type_id?: XmlElem<number>;
  type?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  object_code?: XmlElem<string>;
  object_start_date?: XmlElem<Date>;
  is_public?: XmlElem<boolean>;
  comment?: XmlElem<string>;
}

interface ResponseTypeTopElem extends IWTDocInfo {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  object_type?: XmlElem<string>;
  create_redirect?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface IWTResourceFileUrl {
  id?: XmlElem<string>;
  code?: XmlElem<string>;
  url?: XmlElem<string>;
}
interface IWTResourceLink {
  object_id?: XmlElem<number>;
  object_catalog?: XmlElem<string>;
  object_name?: XmlElem<string>;
  date_modify?: XmlElem<Date>;
}
interface IWTResourceDocumentTopElem extends ObjectCodeNameBase, IWTDocInfo {
  type?: XmlElem<string>;
  status?: XmlElem<string>;
  file_name?: XmlElem<string>;
  allow_download?: XmlElem<boolean>;
  allow_unauthorized_download?: XmlElem<boolean>;
  allow_search?: XmlElem<boolean>;
  file_url?: XmlElem<string>;
  size?: XmlElem<number>;
  use_count?: XmlElem<number>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  file_source?: number;
  resource_type_id?: XmlElem<number>
  file_path?: XmlElem<string>;
  checksum?: XmlElem<string>;
  links?: XmlMultiElem<IWTResourceLink>;
  library_player_id?: XmlElem<number>;
  file_urls?: XmlElem<IWTResourceFileUrl>;

  last_data?: {
    file_name?: XmlElem<string>;
    size?: XmlElem<number>;
  }

  comment?: XmlElem<string>;

  save_data?(): boolean;
  get_data?(url: string): string;
  get_data_add?(sIDParam: number, sUrlParam: string): string;
  download?(oRequest: Request, oResponse: Response): any;
  download_add?(sIDParam: number, oRequest: Request, oResponse: Response): any;
  check_resource_double?(sFileName: string, iSize: number): Object;
  put_data?(_url: string, _source: any): void;
  put_data_add?(sUrlParam: string, sCodeParam: string): void;
  del_data_add?(sIDParam: number): void;
  put_str?(sDataPARAM: string, _filename: string, _source?: any): void;
  add_counter?(source: any): number;
  del_counter?(_source: any, _source_id: number): boolean;
  obtain_link?(_source: any): null | void;
  guess_type?(sFileUrlParam: string): void;
}

interface RequestTopElem extends IWTPersonFillingBase, IWTDocInfo, IWTCustomElemsBase {
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
  workflow_matching_type?: XmlElem<string>;
  workflow_id?: XmlElem<number>;
  workflow_state?: XmlElem<string>;
  workflow_state_name?: XmlElem<string>;
  workflow_state_last_date?: XmlElem<Date>;
  get_workflow_state_name?(workflowTopElem: ITopElem<unknown>): void;
  set_workflow_state_last_date?(Param: Object): void;
  add_workflow_log_entry?(Param: Object): void;
  is_workflow_init?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  row_disp_elem?: XmlElem<string>;
  row_list_field?: XmlElem<string>;
  row_key_field?: XmlElem<string>;
}

interface IWTConditionsBase {
  conditions?: XmlMultiElem<IWTConditionsBase>;
  condition_eval_str?: XmlElem<string>;
  desc_str?: XmlElem<string>;
  has_error?: XmlElem<boolean>;
  warning_str?: XmlElem<string>;
  error_str?: XmlElem<string>;
  is_false?: XmlElem<boolean>;
  error_eval?(): void;
}

interface IWTWorkflowFieldsStatesBaseWorkflowFieldEntry {
  value?: XmlElem<any>;
}
interface IWTWorkflowFieldsStatesBaseWorkflowField {
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  catalog?: XmlElem<string>;
  title?: XmlElem<string>;
  tooltip?: XmlElem<string>;
  xquery_qual?: XmlElem<string>;
  entries?: XmlMultiElem<IWTWorkflowFieldsStatesBaseWorkflowFieldEntry>;
  external_value?: XmlElem<string>;
  external_array?: XmlElem<string>;
  field_group_id?: XmlElem<string>;
  is_required?: XmlElem<boolean>;
}

interface IWTWorkflowFieldsStatesBaseState {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  duration?: XmlElem<number>;
  parameters?: XmlElem<string>;
}

interface IWTWorkflowFieldsStatesBase {
  workflow_fields?: XmlMultiElem<IWTWorkflowFieldsStatesBaseWorkflowField>;
  states?: XmlMultiElem<IWTWorkflowFieldsStatesBaseState>;
}

interface IWTWorkflowFieldGroup {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  read_conditions?: IWTConditionsBase;
  write_conditions?: IWTConditionsBase;
}

interface IWTWorkflowElemOperationBase {
  type?: XmlElem<string>;
	workflow_state_id?: XmlElem<string>;
	workflow_field_id?: XmlElem<string>;
	workflow_field_value?: XmlElem<string>;
	request_status_id?: XmlElem<string>;
	eval_str?: XmlElem<string>;
	notification_id?: XmlElem<number>;
	print_form_id?: XmlElem<number>;
}

interface IWTWorkflowElemOperationsBase {
  operations?: XmlMultiElem<IWTWorkflowElemOperationBase>;
}

interface IWTWorkflowAction extends IWTWorkflowElemOperationsBase,
  IWTConditionsBase,
  IWTWorkflowElemOperationsBase
{
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  is_trigger?: XmlElem<boolean>;
}

interface IWTWorkflowEscalationCourse {
  course_id?: XmlElem<number>;
  state_id?: XmlElem<number>;
}

interface IWTWorkflowEscalationAssessment {
  assessment_id?: XmlElem<number>;
  state_id?: XmlElem<number>;
}

interface IWTWorkflowEscalationPoll {
  poll_id?: XmlElem<number>;
  status?: XmlElem<number>;
}

interface IWTWorkflowEscalation extends IWTWorkflowElemOperationBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  workflow_state_id?: XmlElem<string>;
  auto_escalation?: XmlElem<boolean>;
  auto_escalation_by_end_date?: XmlElem<boolean>;
  auto_escalation_days?: XmlElem<number>;
  auto_escalation_repeat?: XmlElem<boolean>;
  escalation_eval_str?: XmlElem<string>;
  escalation_eval_negative?: XmlElem<boolean>;
  courses?: XmlMultiElem<IWTWorkflowEscalationCourse>;
  assessments?: XmlMultiElem<IWTWorkflowEscalationAssessment>;
  polls?: XmlMultiElem<IWTWorkflowEscalationPoll>;
}

interface IWTWorkflowTuneFieldTuneFieldChain {
  name?: XmlElem<string>;
  path?: XmlElem<string>;
  catalog_name?: XmlElem<string>;
  type?: XmlElem<string>;
  is_multiple?: XmlElem<boolean>;
  pk?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface IWTWorkflowTuneField {
  tune_field_chain: XmlMultiElem<IWTWorkflowTuneFieldTuneFieldChain>;
}

interface IWTWorkflowTopElem extends IWTDocumentTopElem,
  IWTConditionsBase,
  IWTWorkflowFieldsStatesBase,
  IWTDocInfo
{
  id?: XmlElem<number>;
	code?: XmlElem<string>;
	name?: XmlElem<string>;
	add_conditions?: IWTConditionsBase;
  field_groups?: XmlMultiElem<IWTWorkflowFieldGroup>;
  actions?: XmlMultiElem<IWTWorkflowAction>;
	use_triggers?(): boolean;
  escalations?: XmlMultiElem<IWTWorkflowEscalation>;
	default_state?: XmlElem<string>;
	default_action?: XmlElem<string>;
	auto_submit_fields?: XmlElem<boolean>;
	comment?: XmlElem<string>;
	destination_object_name?: XmlElem<string>;
  tune_fields?: XmlMultiElem<IWTWorkflowTuneField>;
	is_std?: XmlElem<boolean>;
	run_action?(actionParam: any): void;
}

interface IWTRemoteSecutiryProfileMethodAccess {
  access_block_id?: XmlElem<string>;
  library_profile?: XmlElem<string>;
}

interface IWTRemoteSecurityProfileTopElem {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  method_access_list?: XmlMultiElem<IWTRemoteSecutiryProfileMethodAccess>
}

interface IWTRemoteApplicationCredential {
  id?: XmlElem<number>;
}

interface IWTQualificationTopElem {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  courses?: XmlMultiElem<XmlElem<number>>
  assessments?: XmlMultiElem<XmlElem<number>>
}

interface IWTQualificationAssignmentLearning {
  learning_id?: XmlElem<number>;
}

interface IWTQualificationAssignmentTestLearning {
  test_learning_id?: XmlElem<number>;
}

interface IWTQualificationAssignmentEducationMethod {
  education_method_id?: XmlElem<number>;
}

interface IWTPersonNameBase {
  lastname?: XmlElem<string>;
  firstname?: XmlElem<string>;
  middlename?: XmlElem<string>;
  fullname?(): string;
  shortname?(): string;
}

interface IWTPersonBase extends IWTPersonNameBase {
  sex?: XmlElem<string>;
  birth_date?: XmlElem<Date>;
  address?: XmlElem<string>;
  phone?: XmlElem<string>;
  mobile_phone?: XmlElem<string>;
  mobile_phone_conf_code?: XmlElem<string>;
  mobile_phone_conf_date?: XmlElem<Date>;
  mobile_phone_conf?: XmlElem<boolean>;
  email?: XmlElem<string>;
  email_conf_code?: XmlElem<string>;
  email_conf_date?: XmlElem<Date>;
  email_conf?: XmlElem<boolean>;
  system_email?: XmlElem<string>;
  login?: XmlElem<string>;
  password?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface IWTPassportDataBase {
  passport_type_id?: XmlElem<string>;
  series?: XmlElem<string>;
  num?: XmlElem<string>;
  registration_date?: XmlElem<Date>;
  registration_agency?: XmlElem<string>;
}

declare namespace ms_tools {
  function raise_system_event_env(systemEventIdentificator: string | number, params: any): void;
}

interface IWTWTVDlgEditTextTopElem {
  url?: XmlElem<string>;
  desc?: XmlElem<string>;
  title?: XmlElem<string>;
  is_rich?: XmlElem<boolean>;
}

interface IWTMSDialogObjectSelectTopElem {
  object_id?: XmlElem<number>;
  object_str?: XmlElem<string>;
  object_name?: XmlElem<string>;
  org_id?: XmlElem<number>;
  multi_select?: XmlElem<boolean>;
  dialog_title?: XmlElem<string>;
  values?: XmlMultiElem<{
    key?: XmlElem<number>;
    key_str?: XmlElem<string>;
    key_name?: XmlElem<string>;
    org_id?: XmlElem<number>;
  }>;

  catalog_name?: XmlElem<string>;
  xquery_qual?: XmlElem<string>;
}

interface IWTMenu {
  name?: XmlElem<string>;
}

interface IWTListsObjectResourceType {
  id: string;
  name: string;
}

interface IWTListsCurrencyTypeModName {
  id: number;
  name: string;
  cent_name: string;
}

interface IWTListsCurrencyType {
  id: string;
  name: string;
  short_name: string;
  cent_name: string;
  mod_names: XmlMultiElem<IWTListsCurrencyTypeModName>;
}

interface IWTListsEventForm {
  id: string;
  name: string;
}

interface IWTListsOrganizationalForm {
  id: string;
  name: string;
}

interface IWTListsFactColumn {
  id: string;
  name: string;
  query_name: string;
  title: string;
}

interface IWTListsFactExtraColumn {
  id: number;
  name: string;
  title: string;
}

interface IWTListsFact {
  id: number;
  name: string;
  type: number;
  catalog: string;
  columns: XmlMultiElem<IWTListsFactColumn>;
  extra_columns: XmlMultiElem<IWTListsFactExtraColumn>;
}

interface IWTListsProfessionalArea {
  id: string;
  name: string;
}

interface IWTListsWebRequirement {
  id: string;
  name: string;
  is_std: boolean;
}

interface IWTListsExternalScript {
  id: string;
  source_url: string;
}

interface lists extends Object {
  object_resource_types: XmlMultiElem<IWTListsObjectResourceType>;
  currency_types: XmlMultiElem<IWTListsCurrencyType>;
  event_forms: XmlMultiElem<IWTListsEventForm>;
  organizational_forms: XmlMultiElem<IWTListsOrganizationalForm>;
  facts: XmlMultiElem<IWTListsFact>;
  professional_areas: XmlMultiElem<IWTListsProfessionalArea>;
  web_requirements: XmlMultiElem<IWTListsWebRequirement>;
  ext_externalscripts: XmlMultiElem<IWTListsExternalScript>;
}

declare var lists: lists;

interface IWTLibraryMaterialFormat {
  library_material_format_id?: XmlElem<number>;
  number?: XmlElem<number>;
}

interface IWTLibraryMaterialGroup {
  group_id?: XmlElem<number>;
  name?: XmlElem<string>;
}

interface IWTLibraryMaterialSubscribedPerson {
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
}

interface IWTLibraryMaterialPathSection {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  parent_id?: XmlElem<number>;
}

interface IWTLearningTaskExpert extends IWTPersonFillingBase {
  id?: XmlElem<string>;
}

type IWTLectorTypes = "invitee" | "collaborator"

interface IWTLearningPartBase extends IWTCoreLessonInfoBase, IWTCoreLessonBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  parent_part_code?: XmlElem<string>;
  course_module_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  state_id?: XmlElem<number>;
  lesson_location?: XmlElem<string>;
  score?: XmlElem<number>;
  score_str?: XmlElem<string>;
  start_usage_date?: XmlElem<Date>;
  last_usage_date?: XmlElem<Date>;
  time?: XmlElem<number>;
  max_score?: XmlElem<number>;
  attempts_num?: XmlElem<number>;
  cur_attempt_num?: XmlElem<number>;
  use_proctoring?: XmlElem<boolean>;
  logs?: [{
    date?: XmlElem<Date>;
    location?: XmlElem<string>;
    type?: XmlElem<string>;
    text?: XmlElem<string>;
    log?: XmlElem<string>;
    comment?: XmlElem<string>;
  }];
  statements?: [{
    statement_id?: XmlElem<number>;
    activity_state_id?: XmlElem<number>;
    score?: XmlElem<number>;
  }];
}

interface IWTLearningCurrentStateBase {
  cur_score?: XmlElem<number>;
  cur_score_str?: XmlElem<string>;
  cur_state_id?: XmlElem<number>;
}

interface IWTLearningAssessmentBase extends IWTAnnalsObjectsBase {
  assessment_id?: XmlElem<number>;
  assessment_name?: XmlElem<string>;
  assessment_code?: XmlElem<string>;
  qti_text?: XmlElem<string>;
  qti_date?: XmlElem<Date>;
  expert_eval?: XmlElem<boolean>;
  adaptive_eval?: XmlElem<boolean>;
  is_self_enrolled?: XmlElem<boolean>;
}

interface IWTLastAttemptTestLearningsBaseTestLearning {
  test_learning_id?: XmlElem<number>;
  state_id?: XmlElem<number>;
  score?: XmlElem<number>;
  start_usage_date?: XmlElem<Date>;
  last_usage_date?: XmlElem<Date>;
}

interface IWTLastAttemptTestLearningsBase {
  test_learnings?: XmlMultiElem<IWTLastAttemptTestLearningsBaseTestLearning>;
}

interface IWTKnowledgePartsBaseTag {
  tag_id: XmlElem<number>;
  tag_name: XmlElem<string>;
  desc: XmlElem<string>;
  require_acknowledgement: XmlElem<boolean>;
}

interface IWTKnowledgePartsBaseExpert {
  expert_id: XmlElem<number>;
}

interface IWTKnowledgePartsBaseKnowledgePart {
  knowledge_part_id: XmlElem<number>;
  knowledge_part_name: XmlElem<string>;
  knowledge_part_level_id: XmlElem<number>;
  full_path: XmlElem<string>;
  desc: XmlElem<string>;
  require_acknowledgement: XmlElem<boolean>;
}

interface IWTKnowledgePartsFieldsBase {
  knowledge_parts?: XmlMultiElem<IWTKnowledgePartsBaseKnowledgePart>;
}

interface IWTKnowledgePartsBase extends IWTKnowledgePartsFieldsBase {
  tags?: XmlMultiElem<IWTKnowledgePartsBaseTag>;
  experts?: XmlMultiElem<IWTKnowledgePartsBaseExpert>;
  acquaint_time?: XmlElem<number>;
  previous_version_object_id?: XmlElem<number>;
  status_in_knowledge_map?: XmlElem<string>;
  kp_start_date?: XmlElem<Date>;
  kp_end_date?: XmlElem<Date>;
  view_knowledge_classifier_id?: XmlElem<number>;
}

interface IWTKnowledgePartsBaseOld {
  start_date?: XmlElem<Date>;
  end_date?: XmlElem<Date>;
}

interface IWTPersonForeignBase {
	person_fullname?(): any;
	person_position_name?(): any;
	person_org_name?(): any;
	person_subdivision_name?(): any;
	person_instance_id?(): any;
	person_code?(): any;
}

interface IWTGroupCollaborator extends IWTPersonForeignBase {
  collaborator_id?: XmlElem<number>;
  collaborator_fullname?: XmlElem<string>;
  desc?: XmlElem<string>;
}

interface IWTRequirementsBase {
  requirements?: XmlMultiElem<any>;
  certificate_types?: XmlMultiElem<any>;
  compound_programs?: XmlMultiElem<any>;
  education_methods?: XmlMultiElem<any>;
  obligatory_education_amount?: XmlElem<number>;
  education_period?: XmlElem<number>;
  typical_development_programs?: XmlMultiElem<any>;
  qualifications?: XmlMultiElem<any>;
  assessments?: XmlMultiElem<any>;
  recomended_library_materials?: XmlMultiElem<any>;
  professional_areas?: XmlMultiElem<any>;
  educ_type_id?: XmlElem<string>;
  education_type_id?: XmlElem<number>;
  age_min?: XmlElem<number>;
  age_max?: XmlElem<number>;
  experience_in_company?: XmlElem<number>;
  experience_in_current_position?: XmlElem<number>;
}


interface IWTEducGroupsBaseEducGroup {
  group_id?: XmlElem<string>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  place_id?: XmlElem<number>;
  conversation_id?: XmlElem<number>;
  collaborators?: XmlMultiElem<any>;
  lectors?: XmlMultiElem<any>;
}

interface IWTEducGroupsBase {
  educ_groups?: XmlMultiElem<IWTEducGroupsBaseEducGroup>;
}

interface IWTGameBonusBaseGameBonus {
  id?: XmlElem<string>;
  currency_type_id?: XmlElem<string>;
  sum?: XmlElem<number>;
}

interface IWTGameBonusBase {
  game_bonuss?: XmlMultiElem<IWTGameBonusBaseGameBonus>;
}

interface IWTFileBase {
  file_id?: XmlElem<number>;
}

interface IWTFileListBase {
  files?: XmlMultiElem<IWTFileBase>;
  AddFile?(_file_id: number, docResourceParam: IDoc<IWTResourceDocumentTopElem>): boolean;
}

interface IWTFieldNamesBaseFieldName extends IWTFieldNamesBase {
  level?: XmlElem<number>;
  field_names?: XmlMultiElem<IWTFieldNamesBaseFieldName>;
}

interface IWTFieldNamesBase {
  field_names?: XmlMultiElem<IWTFieldNamesBaseFieldName>;
}

interface IWTEventPhaseCollaborator {
  collaborator_id: XmlElem<number>;
  is_assist: XmlElem<boolean>;
}

interface IWTEventPhase {
  id: XmlElem<string>;
  lector_id: XmlElem<number>;
  object_resource_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  comment: XmlElem<string>;
  reserve_desc: XmlElem<string>;
  collaborators: XmlMultiElem<IWTEventPhaseCollaborator>;
}
interface IWTEventLearningTask {
  learning_task_id: XmlElem<number>;
}
interface IWTEventLibraryMaterial {
  library_material_id: XmlElem<number>;
}

interface IWTEventFile {
  file_id: XmlElem<number>;
  presentation_id: XmlElem<number>;
  visibility: XmlElem<string>;
}

interface IWTEventExpenseItem {
  expense_item_id: XmlElem<number>;
  sum: XmlElem<number>;
  unnamed_person_sum: XmlElem<number>;
  total_sum: XmlElem<number>;
}

interface IWTEventContract {
  code: XmlElem<string>;
  date: XmlElem<Date>;
  legal_entity_name: XmlElem<string>;
  legal_entity_code: XmlElem<string>;
  desc: XmlElem<string>;
}

interface IWTEventObjectResource {
  object_resource_id: XmlElem<number>;
}

interface IWTEventTutor extends IWTPersonFillingBase {
  collaborator_id: XmlElem<number>;
  telephone_out: XmlElem<string>;
  telephone_in: XmlElem<string>;
  main: XmlElem<boolean>;
  webinar_url: XmlElem<string>;
  participation_id: XmlElem<string>;
}

interface IWTEventGroup {
  group_id: XmlElem<number>;
}

interface IWTEventEvenPreparations {
  even_preparation_id: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  plan_date: XmlElem<Date>;
  fact_date: XmlElem<Date>;
  status_id: XmlElem<string>;
  comment: XmlElem<string>;
  comment_person: XmlElem<string>;
}

interface IWTEventUnnamedPersonByOrgs {
  org_id: XmlElem<number>;
  org_name: XmlElem<string>;
  unnamed_person_num: XmlElem<number>;
  collaborator_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
}

interface IWTExpenseItem {
  expense_item_id: XmlElem<number>;
  sum: XmlElem<number>;
}

interface IWTEventCollaborator extends IWTPersonFillingBase {
  collaborator_id: XmlElem<number>;
  last_exist_date: XmlElem<Date>;
  education_plan_id: XmlElem<number>;
  request_person_id: XmlElem<number>;
  active_test_learning_id: XmlElem<number>;
  controller_code: XmlElem<string>;
  webinar_url: XmlElem<string>;
  participation_id: XmlElem<string>;
  expense_items: XmlElem<IWTExpenseItem>;
  cost_center_id: XmlElem<number>;
  total_sum: XmlElem<number>;
  not_pay: XmlElem<boolean>;
  can_use_camera: XmlElem<boolean>;
  can_use_microphone: XmlElem<boolean>;
  current_state: XmlElem<string>;
  edu_group_name: XmlElem<string>;
}

interface IWTEventForm {
  form_id: XmlElem<string>;
}

interface IWTEventStage {
  stage_id: XmlElem<number>;
  parent_id: XmlElem<number>;
  name: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  is_active: XmlElem<boolean>;
}

declare interface IWTEventLector {
  lector_id: XmlElem<number>;
}

interface IWTEventSettingsBase {
  event_settings?: {
    send_type?: XmlElem<string>;
    send_collaborators?: XmlElem<boolean>;
    send_bosses?: XmlElem<boolean>;
    send_lectors?: XmlElem<boolean>;
    send_tutors?: XmlElem<boolean>;
    send_event_preparations?: XmlElem<boolean>;
    show_result_fields?: XmlElem<boolean>;
  }
}

interface IWTCatalogListBaseCatalogObject {
  object_id?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface IWTCatalogListBaseCatalog {
  type?: XmlElem<string>;
  title?: XmlElem<string>;
  all?: XmlElem<boolean>;
  objects?: XmlMultiElem<IWTCatalogListBaseCatalogObject>;
}

interface IWTCatalogListBase {
  catalogs?: XmlMultiElem<IWTCatalogListBaseCatalog>;
  catalogs_catalog_type?: XmlElem<string>;
  catalogs_sel_all_objects?: XmlElem<boolean>;
}

interface IWTEnv {
  /**
   * Текущий сайт пользователя с которым он взаимодействует
   */
  curSite: IDoc<IWTSiteTopElem>;
  /**
   * ID текущего пользователя
   */
  curUserID: number;
  /**
   * Объект пользователя
   */
  curUser: IDoc<ICollaborator>;
}

interface IWTEducationPlanProgramLearningTask {
  learning_task_id?: XmlElem<number>;
}

interface IWTEducationPlanProgramAssessment {
  assessment_id?: XmlElem<number>;
}

interface IWTEducationPlanNotification {
  notification_template_id?: XmlElem<number>
  subject?: XmlElem<string>
  body?: XmlElem<string>
  body_type?: XmlElem<string>
  edit_notification?: XmlElem<boolean>
}

interface IWTEducationPlanCompletedParentProgram {
  program_id?: XmlElem<number>;
}

interface IWTEducationPlanProgramResult {
  person_id?: XmlElem<number>
  type?: XmlElem<string>
  date?: XmlElem<Date>
}

interface IWTEducationPlanProgram {
  id?: XmlElem<number>
  name?: XmlElem<string>
  parent_progpam_id?: XmlElem<number>
  education_method_id?: XmlElem<number>
  education_program_id?: XmlElem<number>
  start_learning_tasks?: XmlMultiElem<IWTEducationPlanProgramLearningTask>;
  start_assessments?: XmlMultiElem<IWTEducationPlanProgramAssessment>;
  finish_learning_tasks?: XmlMultiElem<IWTEducationPlanProgramLearningTask>;
  finish_assessments?: XmlMultiElem<IWTEducationPlanProgramAssessment>;
  finish_notifiation?: IWTEducationPlanNotification;
  start_notifiation?: IWTEducationPlanNotification;
  type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  object_code?: XmlElem<string>;
  object_start_date?: XmlElem<Date>;
  catalog_name?: XmlElem<string>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  edit_notification?: XmlElem<boolean>;
  delay_days?: XmlElem<number>;
  days?: XmlElem<number>;
  create_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  plan_date?: XmlElem<Date>;
  result_type?: XmlElem<string>
  result_object_id?: XmlElem<number>
  result_object_name?: XmlElem<string>
  result_object_code?: XmlElem<string>
  result_object_start_date?: XmlElem<Date>
  result_object_finish_date?: XmlElem<Date>
  state_id?: XmlElem<number>;
  tutor_id?: XmlElem<number>;
  weight?: XmlElem<number>;
  readiness_percent?: XmlElem<number>;
  start_type?: XmlElem<string>;
  mark?: XmlElem<number>;
  active_learning_id?: XmlElem<number>;
  learning_id?: XmlElem<number>;
  request_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  required?: XmlElem<boolean>;
  completed_parent_programs?: XmlMultiElem<IWTEducationPlanCompletedParentProgram>;
  program_results?: XmlMultiElem<IWTEducationPlanProgramResult>;
}

interface IWTDotnetCoreHost {
  Object?: {
    GetAssembly(libName: string): {
      CallClassStaticMethod(className: string, methodName: string, arguments: XmlMultiElem<any>, single?: boolean, wait?: boolean, max_run_time?: number): any;
      CreateClassObject(classObject: string): any;
    };
  };
}

interface IWTDocumentAttributesBase {
  template?: XmlElem<string>;
  position?: XmlElem<number>;
  is_link?: XmlElem<boolean>;
  link_href?: XmlElem<string>;
  link_target?: XmlElem<string>;
  permit_subscription?: XmlElem<boolean>;
}

interface IWTDocumentAttribute extends IWTDocumentAttributesBase {
  is_menu?: XmlElem<boolean>;
  is_main_item?: XmlElem<boolean>;
  is_news?: XmlElem<boolean>;
  left_disp_childs?: XmlElem<boolean>;
  no_disp_childs?: XmlElem<boolean>;
}

interface IWTDocumentTopElem extends
  ObjectCodeNameBase,
  IWTCatalogListBase,
  IWTFileListBase,
  IWTWebVariablesBase,
  IWTKnowledgePartsBase,
  IWTKnowledgePartsBaseOld,
  IWTGameBonusBase,
  IWTCatalogListBase,
  IWTDocumentPersonsBase,
  IWTDocInfo {
  create_date?: XmlElem<Date>;
  parent_document_id?: XmlElem<number>;
  site_id?: XmlElem<number>;
  catalog_list_desc?: string;
  text_area?: XmlElem<string>;
  attributes?: IWTDocumentAttribute;
  web_template_type?: XmlElem<string>;
  custom_template_type?: XmlElem<number>;
  templates_source?: XmlElem<string>;
  parent_object_type?: XmlElem<string>;
  comment?: XmlElem<string>;
  set_template?(sTemplateTypeParam: string): void;
  set_default_template?(): boolean;
  update_template?(): boolean;
}

interface IWTTagTopElem extends
  IWTAdminAccessBase
{
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  require_acknowledgement?: XmlElem<boolean>;
  experts?: XmlMultiElem<{
    expert_id: XmlElem<number>;
  }>;
  access?: XmlElem<IWTAccessDocBase>;
  comment?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;
}

interface IWTAccessDocBase {
  enable_anonymous_access?: XmlElem<boolean>;
  access_level?: XmlElem<number>;
  access_roles?: XmlMultiElem<{
    access_role_id?: XmlElem<string>;
  }>;
  access_groups?: XmlMultiElem<{
    group_id?: XmlElem<number>;
  }>;
  access?: IWTViewConditionsBase;
  access_org_id?: XmlElem<number>;
  access_site_id?: XmlElem<number>;
  access_host_id?: XmlElem<number>;
  web_mode_id?: XmlElem<number>;

  operator?: XmlElem<string>;
}

interface IWTDocumentPersonsBasePerson {
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  can_create?: XmlElem<boolean>;
  can_edit?: XmlElem<boolean>;
  can_delete?: XmlElem<boolean>;
}

interface IWTDocumentPersonsBase {
  document_persons?: XmlMultiElem<IWTDocumentPersonsBasePerson>;
}

interface IWTDocInfoCreation {
  user_login?: XmlElem<string>;
  user_id?: XmlElem<number>;
  date?: XmlElem<Date>;
  app_instance_id?: XmlElem<string>;
}

interface IWTDocInfoModification {
  user_login?: XmlElem<string>;
  user_id?: XmlElem<number>;
  date?: XmlElem<Date>;
}

interface IWTDocInfoBase {
  creation?: XmlElem<IWTDocInfoCreation>;
  modification?: XmlElem<IWTDocInfoModification>;
  invariable?: XmlElem<boolean>;
}

interface IWTDocInfo {
  creation?: XmlElem<IWTDocInfoCreation>;
  modification?: XmlElem<IWTDocInfoModification>;
  invariable?: XmlElem<boolean>;
}

interface IWTCustomReportBaseAggregation {
  aggregate_function?: XmlElem<string>;
  aggregate_column?: XmlElem<number>;
  flag_graph?: XmlElem<boolean>;
  aggregate_secondary: {
    option_type?: XmlElem<string>;
    column_value?: XmlElem<string>;
  }
}

interface IWTCustomReportBase extends IWTCriterionBase, IWTColumnBase, IWTChartReportGraphBase {
  object_name_type?: XmlElem<string>;
  object_name?: XmlElem<string>;
  flag_open_param_tun_section?: XmlElem<boolean>;
  flag_custom_x?: XmlElem<boolean>;
  custom_x?: XmlElem<string>;
  show_table?: XmlElem<boolean>;
  show_chart?: XmlElem<boolean>;
  get_report_data?(iReportID_PARAM: number, iUserID_PARAM: number): any;
  report_result_date?: XmlElem<Date>;
  report_result_author?: XmlElem<string>;
  performance_launch_time?: XmlElem<Date>;
  performance_search_time?: XmlElem<Date>;
  performance_process_time?: XmlElem<Date>;
  categorize?: XmlElem<boolean>;
  categorize_view?: XmlElem<string>;
  categorize_hide_details?: XmlElem<boolean>;
  aggregations?: XmlMultiElem<IWTCustomReportBaseAggregation>;
  show_total?: XmlElem<boolean>;
  integrated_criterion_field?: XmlElem<string>;
  integrated_criterion_field_is_custom?: XmlElem<boolean>;
  integrated_criterion_value?: XmlElem<string>;
}

interface IWTCustomElemsBaseCustomElem {
  name?: XmlElem<string>;
  value?: XmlElem<any>;
}

interface IWTCustomElemsBaseCustomReportFiction extends IWTCustomReportBase {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
}

interface IWTCustomElemsBase {
  custom_elems?: XmlMultiElem<IWTCustomElemsBaseCustomElem>;
  custom_report_fictions?: XmlMultiElem<IWTCustomElemsBaseCustomReportFiction>;
}

interface IWTCriterionBaseCriterionCatalogChain extends IWTViewConditionsBase, IWTFieldNamesBase {
  catalog_name?: XmlElem<string>;
  field?: XmlElem<string>;
  scheme_id?: XmlElem<string>;
}

interface IWTCriterionBaseCriterion {
  value?: XmlElem<string>;
  column_title?: XmlElem<string>;
  type?: XmlElem<string>;
  option_type?: XmlElem<string>;
  and_or?: XmlElem<string>;
  is_custom_field?: XmlElem<boolean>;
  catalog_chains?: XmlMultiElem<IWTCriterionBaseCriterionCatalogChain>;
  flag_value_filter?: XmlElem<boolean>;
  flag_is_parameter?: XmlElem<boolean>;
  flag_hierarchy?: XmlElem<number>;
  flag_active?: XmlElem<boolean>;
  open_bracket?: XmlElem<string>;
  close_bracket?: XmlElem<string>;
}

interface IWTCriterionBase extends IWTFieldNamesBase {
  criterions: XmlMultiElem<IWTCriterionBaseCriterion>;
}

interface IWTCredentialTopElem extends IWTDocInfo {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  login?: XmlElem<string>;
  password?: XmlElem<string>;
  remote_security_profile_id?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface IWTCoursePartActivityState {
  activity_state_id?: XmlElem<number>;
  score?: XmlElem<number>;
  state_id?: XmlElem<number>;
}

interface IWTCoursePart {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  max_score?: XmlElem<number>;
  mastery_score?: XmlElem<number>;
  mastery_score_relative?: XmlElem<number>;
  url?: XmlElem<string>;
  course_module_id?: XmlElem<number>;
  parent_part_code?: XmlElem<string>;
  desc?: XmlElem<string>;
  win_width?: XmlElem<number>;
  win_height?: XmlElem<number>;
  disp_scrolling?: XmlElem<boolean>;
  resizable?: XmlElem<boolean>;
  is_mandatory?: XmlElem<boolean>;
  is_visible?: XmlElem<boolean>;
  max_time_allowed?: XmlElem<string>;
  time_limit_action?: XmlElem<string>;
  set_status_side?: XmlElem<string>;
  score_factor?: XmlElem<number>;
  assessment_id?: XmlElem<number>;
  attempts_num?: XmlElem<number>;
  start_day?: XmlElem<number>;
  duration_day?: XmlElem<number>;
  activity_id?: XmlElem<number>;
  activity_state: XmlMultiElem<IWTCoursePart>;
  object_id?: XmlElem<number>;
  cl_module_view?: XmlElem<string>;
}

interface IWTPersonExpert {
  person_id?: number;
  type?: string;
}

interface IWTCourseSettingsBase {
  settings?: {
    open_single_module?: XmlElem<boolean>;
    open_first_module?: XmlElem<boolean>;
    open_last_visited?: XmlElem<boolean>;
    open_next_after_completed?: XmlElem<boolean>;
    launch_type?: XmlElem<string>;
  }
}

interface IWTCoreLessonInfoBase {
  learning_part_id?: XmlElem<number>;
  filing_learning_part?(bSetChangedParam: boolean): void;
  save_learning_part(bSaveParam: number): boolean;
  core_lesson_changed?: XmlElem<boolean>;
  core_lesson_filled?: XmlElem<boolean>;
}

interface IWTCoreLessonBase {
  core_lesson?: XmlElem<string>;
  lesson_report?: XmlElem<string>;
  data_lesson: {
    core_vendor?: XmlElem<string>;
    objectives_status?: XmlElem<string>;
    evaluation?: XmlElem<string>;
    comments?: XmlElem<string>;
    student_data?: XmlElem<string>;
    student_preferences?: XmlElem<string>;
    student_demographics?: XmlElem<string>;
  }
}

interface IWTCompoundProgramProgram {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  parent_progpam_id?: XmlElem<number>;
  education_program_id?: XmlElem<number>;
  education_method_id?: XmlElem<number>;
  duration?: XmlElem<number>;
  person_num?: XmlElem<number>;
  type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  object_code?: XmlElem<string>;
  catalog_name?: XmlElem<string>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  edit_notification?: XmlElem<boolean>;
  delay_days?: XmlElem<number>;
  days?: XmlElem<number>;
  weight?: XmlElem<number>;
  start_type?: XmlElem<string>;
  required?: XmlElem<boolean>;
  comment?: XmlElem<string>;
}

interface IWTLectorsBaseLector {
  lector_id?: XmlElem<number>;
  hours?: XmlElem<number>;
  weekend_hours?: XmlElem<number>;
  webinar_url?: XmlElem<string>;
  participation_id?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface IWTLectorsBase {
  lectors?: XmlMultiElem<IWTLectorsBaseLector>;
}

interface IWTBudgetPeriodDay {
  date?: XmlElem<Date>;
  type?: XmlElem<string>;
  region_id?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface IWTBudgetPeriodTopElem extends
  IWTAdminAccessBase,
  IWTCustomElemsBase,
  IWTDocInfo
{
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  parent_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  period_type?: XmlElem<string>;
  days?: XmlMultiElem<IWTBudgetPeriodDay>;
  comment?: XmlElem<string>;
}

interface IResultActivateProgramToPerson {
  result: [{
    id: number;
    error: number;
    text: string;
  }];
}

interface IWTColumnBaseColumnCCondition {
  option_type?: XmlElem<string>;
  color?: XmlElem<string>;
  bkcolor?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface IWTColumnBaseColumnForeignElem {
  name?: XmlElem<string>;
  catalog?: XmlElem<string>;
  is_custom?: XmlElem<boolean>;
  target?: XmlElem<string>;
}

interface IWTColumnBaseColumn {
  column_name?: XmlMultiElem<string>;
  column_title?: XmlMultiElem<string>;
  column_foreign_name?: XmlMultiElem<string>;
  column_foreign_catalog_2?: XmlMultiElem<string>;
  column_foreign_name_2?: XmlMultiElem<string>;
  column_value?: XmlMultiElem<string>;
  column_width?: XmlMultiElem<number>;
  column_width_unit?: XmlMultiElem<string>;
  column_color?: XmlMultiElem<string>;
  column_bkcolor?: XmlMultiElem<string>;
  datatype?: XmlMultiElem<string>;
  flag_formula?: XmlMultiElem<boolean>;
  flag_formula_post_process?: XmlMultiElem<boolean>;
  flag_color?: XmlMultiElem<boolean>;
  flag_visible?: XmlMultiElem<boolean>;
  flag_lng?: XmlMultiElem<boolean>;
  c_conditions?: XmlMultiElem<IWTColumnBaseColumnCCondition>;
  foreign_elem?: XmlMultiElem<IWTColumnBaseColumnForeignElem>;
}

interface IWTColumnBase {
  columns?: XmlMultiElem<IWTColumnBaseColumn>;
}

interface IWTCollaboratorChangeLog extends IWTCustomElemsBase {
  id?: XmlElem<string>;
  position_id?: XmlElem<number>;
  position_name?: XmlElem<string>;
  position_parent_id?: XmlElem<number>;
  position_parent_name?: XmlElem<string>;
  org_id?: XmlElem<number>;
  org_name?: XmlElem<string>;
  date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  working_days?: XmlElem<number>;
  working_hours?: XmlElem<number>;
  rate?: XmlElem<number>;
  rate_percent?: XmlElem<number>;
}

interface IWTCollaboratorHistoryState {
  id?: XmlElem<string>;
  state_id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
}

interface IWTCollaboratorPersonalConfig {
  avatar_filename?: XmlElem<string>;
  nick?: XmlElem<string>;
  status?: XmlElem<string>;
  default_info_type?: XmlElem<string>;
}

interface IWTFuncManagersBaseFuncManager extends IWTPersonFillingBase {
  person_id?: XmlElem<number>;
  is_native?: XmlElem<boolean>;
  boss_type_id?: XmlElem<number>;
}

interface IWTFuncManagersBase {
  func_managers?: XmlMultiElem<IWTFuncManagersBaseFuncManager>;
  obtain_func_manager_by_id?(managerId: number, bossTypeId?: number): void;
}

interface IWTPathSubBasePathSub {
  id?: XmlElem<number>;
  type?: XmlElem<string>;
  name?: XmlElem<string>;
  parent_id?: XmlElem<number>;
}

interface IWTPathSubBase {
  path_subs?: XmlMultiElem<IWTPathSubBasePathSub>;
  filling_path_subs?(): XmlMultiElem<IWTPathSubBasePathSub>;
}

interface IWTPersonObjectLinksBasePersonObjectProfile {
  person_object_profile_id?: XmlElem<number>;
}

interface IWTPersonObjectLinksBasePersonObjectLinkObject {
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  can_edit?: XmlElem<boolean>;
  can_delete?: XmlElem<boolean>;
  access_level?: XmlElem<number>;
}

interface IWTPersonObjectLinksBasePersonObjectLink {
  object_catalog?: XmlElem<string>;
  all_can_create?: XmlElem<boolean>;
  amount?: XmlElem<number>;
  all_can_edit?: XmlElem<boolean>;
  all_can_delete?: XmlElem<boolean>;
  objects?: XmlMultiElem<IWTPersonObjectLinksBasePersonObjectLinkObject>;
}

interface IWTPersonObjectLinksBase {
  pol_loaded?: XmlElem<boolean>;
  pol_changed?: XmlElem<boolean>;
  person_object_profiles?: XmlMultiElem<IWTPersonObjectLinksBasePersonObjectProfile>;
  person_object_links?: XmlMultiElem<IWTPersonObjectLinksBasePersonObjectLink>;
}

interface IWTCollaboratorCustomParam {
  name?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface IWTCollaboratorCompBenPaymentType {
  payment_type_id?: XmlElem<number>;
  max_value?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface IWTCollaboratorCompBen {
  salary?: XmlElem<number>;
  currency_type_id?: XmlElem<string>;
  payment_period?: XmlElem<string>;
  comment?: XmlElem<string>;
  payment_types?: XmlMultiElem<IWTCollaboratorCompBenPaymentType>
}

interface IWTPositionCompetenceProfile {
  id?: XmlElem<number>;
}

interface IWTCompetenceExercise {
  exercise_id?: XmlElem<number>;
}

interface IWTCompetenceTopElem extends
  IWTObjectCodeNameBase,
  IWTKnowledgePartsBase,
  IWTKnowledgePartsBaseOld,
  IWTCustomElemsBase,
  IWTFileListBase,
  IWTAdminAccessBase
{
  competence_block_id?: XmlElem<number>;
  exercises?: XmlMultiElem<IWTCompetenceExercise>;
  positive_comment?: XmlElem<string>;
  negative_comment?: XmlElem<string>;
  comment?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  role_id?: XmlMultiElem<number>;
}

interface IWTCompetenceBlockTopElem extends
  IWTAdminAccessBase
{
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  parent_object_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
}

interface IWTCompetenceProfileRole {
  role_code?: XmlElem<string>;
}

interface IWTCompetenceProfileCompetence {
  competence_id?: XmlElem<number>;
  plan?: XmlElem<string>;
  plan_text?: XmlElem<string>;
  plan_value?: XmlElem<number>;
  weight?: XmlElem<number>;
  comment?: XmlElem<string>;
  type?: XmlElem<string>;
  education_methods?: XmlMultiElem<IWTCompetenceProfileEducationMethod>;
}

interface IWTCompetenceProfileEducationMethod {
  education_method_id?: XmlElem<number>;
}

interface IWTCompetenceProfileAssessment {
  assessment_id?: XmlElem<number>;
  assessment_score?: XmlElem<number>;
}

interface IWTCompetenceProfilePositionCommon {
  position_common_id?: XmlElem<number>;
}

interface IWTCompetenceProfileTopElem extends
  IWTObjectCodeNameBase,
  IWTFileListBase,
  IWTKnowledgePartsBase,
  IWTKnowledgePartsBaseOld,
  IWTCustomElemsBase,
  IWTAdminAccessBase
{
  roles?: XmlMultiElem<IWTCompetenceProfileRole>;
  competences?: XmlMultiElem<IWTCompetenceProfileCompetence>;
  education_methods?: XmlMultiElem<IWTCompetenceProfileEducationMethod>;
  assessments?: XmlMultiElem<IWTCompetenceProfileAssessment>;
  access_role?: XmlElem<string>;
  position_commons?: XmlMultiElem<IWTCompetenceProfilePositionCommon>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  comment?: XmlElem<string>;
  update_values?(): any
  role_id?: XmlMultiElem<number>;
}

interface IWTCompetenceProfileFamilyCompetenceProfile {
  competence_profile_id?: XmlElem<number>;
}

interface IWTCompetenceProfileFamilyTopElem extends
  IWTAdminAccessBase
{
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  competence_profiles?: XmlMultiElem<IWTCompetenceProfileFamilyCompetenceProfile>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
}

interface IWTPositionKPIProfile {
  id?: XmlElem<number>;
  period_type_id?: XmlElem<string>;
}

interface IWTPersonFillingBase {
  person_fullname?: XmlElem<string>;
  person_position_id?: XmlElem<number>;
  person_position_name?: XmlElem<string>;
  person_position_code?: XmlElem<string>;
  person_org_id?: XmlElem<number>;
  person_org_name?: XmlElem<string>;
  person_org_code?: XmlElem<string>;
  person_subdivision_id?: XmlElem<number>;
  person_subdivision_name?: XmlElem<string>;
  person_subdivision_code?: XmlElem<string>;
  person_instance_id?: XmlElem<string>;
  person_code?: XmlElem<string>;
}

interface IWTChartReportGraphBase {
  disp_legend?: XmlElem<boolean>;
  chart_id?: XmlElem<string>;
  flag_showvalues?: XmlElem<boolean>;
  plot_type?: XmlElem<string>;
  flag_open_graph_tun_section?: XmlElem<boolean>;
}

interface IWTCatalogListBaseCatalogObject {
  object_id?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface IWTCareerReserveTutor {
  person_id?: XmlElem<number>;
  is_native?: XmlElem<boolean>;
  boss_type_id?: XmlElem<number>;
  is_responsible?: XmlElem<boolean>;
  comment?: XmlElem<string>;
}

interface IWTCareerReserveComissionPerson {
  person_id?: XmlElem<number>;
  score?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface IWTCareerReserveTask extends XmlElem<any> {
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
  active_learning_id?: XmlElem<number>;
  assessment_appraise_id?: XmlElem<number>;
  assessment_appraise_result_id?: XmlElem<number>;
  poll_result_id?: XmlElem<number>;
  poll_procedure_id?: XmlElem<number>;
  type_document?: XmlElem<string>;
  link_document?: XmlElem<string>;
  forbid_task_portal_edit?: XmlElem<boolean>;
  commission_persons?: XmlMultiElem<IWTCareerReserveComissionPerson>;
}

interface IWTAssessmentSectionItemScale {
  scale_id?: XmlElem<string>;
}

interface IWTAssessmentSectionItem {
  id?: XmlElem<number>;
  title?: XmlElem<string>;
  question_points?: XmlElem<number>;
  scales?: XmlMultiElem<IWTAssessmentSectionItemScale>;
}

interface IWTAssessmentSection {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  title?: XmlElem<string>;
  duration?: XmlElem<number>;
  passing_score?: XmlElem<number>;
  display_correct_answer?: XmlElem<boolean>;
  not_display_feedback?: XmlElem<boolean>;
  not_disp_last_attempt?: XmlElem<boolean>;
  feedback_wrong?: XmlElem<string>;
  feedback_correct?: XmlElem<string>;
  items?: XmlMultiElem<IWTAssessmentSectionItem>;
  comment?: XmlElem<string>;
}

interface IWTAnnalsObjectBase {
  id?: XmlElem<any>;
  attempt_id?: XmlElem<string>;
  file?: XmlElem<string>;
  objtype?: XmlElem<string>;
}

interface IWTAnnalsObjectsBase {
  objects?: XmlMultiElem<IWTAnnalsObjectBase>;
}

interface IWTAnnalsNumsBase {
  question_num?: XmlElem<number>;
  question_answered_num?: XmlElem<number>;
  question_passed_num?: XmlElem<number>;
}

interface IWTActiveNotificationSender {
  address?: XmlElem<string>;
  name?: XmlElem<string>;
}

interface IWTActiveNotificationRecipients {
  address?: XmlElem<string>;
  mobile_phone?: XmlElem<string>;
  name?: XmlElem<string>;
  collaborator_id?: XmlElem<number>;
}

interface IWTActiveNotificationTopElem {
  notification_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  sec_object_id?: XmlElem<number>;
  text?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  last_send_date?: XmlElem<Date>;
  send_date?: XmlElem<Date>;
  is_custom?: XmlElem<boolean>;
  status?: XmlElem<string>;
  send_counter?: XmlElem<number>;
  sender?: XmlElem<IWTActiveNotificationSender>;
  date?: XmlElem<Date>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  attachments?: XmlMultiElem<{
    name?: XmlElem<string>;
    data?: XmlElem<Binary>;
  }>;

  recipients?: XmlElem<IWTActiveNotificationRecipients>;
  notification_system_id?: XmlElem<number>;
}

interface IWTPollReportViewer extends IWTPersonFillingBase {
  person_id?: XmlElem<number>;
}

interface IWTPollQuestionEntry {
  id?: XmlElem<number>;
  value?: XmlElem<string>;
  weight?: XmlElem<number>;
  bg_color?: XmlElem<string>;
  resource_id?: XmlElem<number>;
}

interface IWTPollQuestionRowColumn {
  id?: XmlElem<number>;
  value?: XmlElem<string>;
  bg_color?: XmlElem<string>;
}
interface IWTPollQuestionRow {
  id?: XmlElem<number>;
  value?: XmlElem<string>;
  bg_color?: XmlElem<string>;
  columns?: XmlMultiElem<IWTPollQuestionRowColumn>;
}

interface IWTPollQuestion extends IWTCustomElemsBase {
  id?: XmlElem<number>;
  type?: XmlElem<string>;
  title?: XmlElem<string>;
  is_in_table?: XmlElem<boolean>;
  show_header?: XmlElem<boolean>;
  required?: XmlElem<boolean>;
  catalog?: XmlElem<string>;
  add_comment?: XmlElem<boolean>;
  subtype?: XmlElem<number>;
  is_multiple?: XmlElem<boolean>;
  value_condition?: XmlElem<string>;
  completed?: XmlElem<boolean>;
  image_id?: XmlElem<number>;

  entries?: XmMultiElem<IWTPollQuestionEntry>;
  rows?: XmMultiElem<IWTPollQuestionRow>;

  is_current?: XmlElem<boolean>;
  catalog_entry_id?: XmlElem<number>;
}

interface IWTPollItemRowColumn {
  id?: XmlElem<string>;
  bg_color?: XmlElem<string>;
  question_id?: XmlElem<number>;
  value?: XmlElem<string>;
  is_title?: XmlElem<boolean>;
}

interface IWTPollItemRow {
  id?: XmlElem<string>;
  bg_color?: XmlElem<string>;
  question_id?: XmlElem<number>;
  value?: XmlElem<string>;
  columns?: XmlMultiElem<IWTPollItemRowColumn>;
  is_title?(): boolean;
}

interface IWTPollItemCondition {
  id?: XmlElem<string>;
  question_id?: XmlElem<number>;
  entry_id?: XmlElem<number>;
  and_or?: XmlElem<string>;
}

interface IWTPollItem {
  id?: XmlElem<string>;
  type?: XmlElem<string>;
  title?: XmlElem<string>;
  question_id?: XmlElem<number>;
  required?: XmlElem<boolean>;
  resource_type?: XmlElem<string>;
  max_duration?: XmlElem<number>;
  preparation_time?: XmlElem<number>;
  prohibit_viewing?: XmlElem<boolean>;
  prohibit_overwriting?: XmlElem<boolean>;
  rows?: XmlMultiElem<IWTPollItemRow>;
  conditions?: XmlMultiElem<IWTPollItemCondition>;
}

interface IWTNotificationRecipient {
  recipient_type?: XmlElem<string>;
  func_manager_type_id: number;
  eval_str?: XmlElem<string>;
  eval_ids_str?: XmlElem<string>;
  notification_template_id?: XmlElem<number>;
}

interface IWTNotificationNotificationSystem {
  notification_system_id?: XmlElem<number>;
}

interface IWTNotificationTemplateMainObject extends IWTFieldNamesBaseFieldName {
  catalog_name?: XmlElem<string>;
  init_field_names?: Function;
}

interface IWTActiveLearningPart {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  last_usage_date?: XmlElem<Date>;
  state_id?: XmlElem<number>;
  score?: XmlElem<number>;
  time?: XmlElem<number>;
  start_usage_date?: XmlElem<Date>;
}

interface IWTActiveLearningTopElem extends
  IWTPersonFillingBase,
  IWTAdminAccessBase,
  IWTDocInfo
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
  start_usage_date?: XmlElem<Date>;
  start_learning_date?: XmlElem<Date>;
  is_self_enrolled?: XmlElem<boolean>;
  duration?: XmlElem<number>;
  max_end_date?: XmlElem<Date>;
  attempts_num?: XmlElem<number>;
  base_url?: XmlElem<string>;

  education_plan_id?: XmlElem<number>;
  parts?: XmlMultiElem<IWTActiveLearningPart>;
  last_usage_part_code?: XmlElem<string>;
  last_usage_date?: XmlElem<Date>;
  score_sum_eval?: XmlElem<string>;
  score?: XmlElem<number>;
  max_score?: XmlElem<number>;
  calc_score?: number;
  state_id?: XmlElem<number>;
  time?: XmlElem<number>;
  calc_max_end_date?: XmlElem<Date>;
  no_encoding_core_lesson?: XmlElem<boolean>;
  logging?: XmlElem<boolean>;
  commenting?: XmlElem<boolean>;
  use_proctoring?: XmlElem<boolean>;
  device_disp_type?: XmlElem<string>;
  comment?: XmlElem<string>;
  complete_course?(): number;
  update_add_data?(): void;
}

interface IWTAccessBase {
  access_level?: XmlElem<number>;
  access_role?: XmlElem<string>;
  is_arm_admin?: XmlElem<boolean>;
  web_banned?: XmlElem<boolean>;
  user_group_id?: XmlElem<number>;
  is_content_admin?: XmlElem<boolean>;
}

interface IWTActionReportTopElem {
  type?: XmlElem<string>;
  status?: XmlElem<string>;
  completed?: XmlElem<boolean>;
  finished?: XmlElem<boolean>;
  exchange_server_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  last_upload_date?: XmlElem<Date>;
  report_text?: XmlElem<string>;
  data_file_url?: XmlElem<string>;
  server_version?: XmlElem<string>;
  create_date?: XmlElem<Date>;
}

interface IWTBlogEntryCommentTopElem extends
  IWTFileListBase,
  IWTDocInfo,
  IWTCustomElemsBase
{
  id?: XmlElem<number>;
	create_date?: XmlElem<Date>;
	blog_entry_id?: XmlElem<number>;
	object_type?: XmlElem<string>;
	object_name?: XmlElem<string>;
	person_id?: XmlElem<number>;
	person_fullname?: XmlElem<string>;
	name?: XmlElem<string>;
	parent_id?: XmlElem<number>;
	like_id?: XmlElem<number>;
	message?: XmlElem<string>;
	type?: XmlElem<string>;
	creator_name?(): string;
}

interface IWTResponseTopElem extends
  IWTPersonFillingBase,
  IWTAdminAccessBase,
  IWTCustomElemsBase
{
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  response_type_id?: XmlElem<number>;
  type?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  object_code?: XmlElem<string>;
  object_start_date?: XmlElem<Date>;
  is_public?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  basic_score?: XmlElem<number>;
  basic_desc?: XmlElem<string>;
  calc_basic_values?(): any
}

interface IWTRequestPerson extends IWTPersonFillingBase {
  person_id?: XmlElem<number>;
}

interface IWTRequestGroup {
  group_id?: XmlElem<number>;
}

interface IWTRequestWorkflowMatching {
  id?: XmlElem<string>;
  person_id?: XmlElem<number>;
  type?: XmlElem<string>;
  is_main?: XmlElem<boolean>;
}

interface IWTWorkflowDataBaseWorkflowField {
  name?: XmlElem<string>;
  value?: XmlElem<unknown>;
  workflow_state?: XmlElem<string>;
}

interface IWTWorkflowDataBaseWorkflowLogEntry {
  create_date?: XmlElem<Date>;
  action_id?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  begin_state?: XmlElem<string>;
  finish_state?: XmlElem<string>;
  submited?: XmlElem<boolean>;
}

interface IWTWorkflowDataBaseWorkflowCustomStateCondition {
  type?: XmlElem<string>;
  cur_user_type?: XmlElem<string>;
  person_id?: XmlElem<number>;
  and_or?: XmlElem<string>;
  begin_bracket?: XmlElem<string>;
  finish_bracket?: XmlElem<string>;
}

interface IWTWorkflowDataBaseWorkflowCustomState {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  next_workflow_custom_state_code?: XmlElem<string>;
  common_state_code?: XmlElem<string>;
  conditions?: XmlMultiElem<IWTWorkflowDataBaseWorkflowCustomStateCondition>;
  condition_eval_str?: XmlElem<string>;
}

interface IWTWorkflowDataBase {
  workflow_id?: XmlElem<number>;
	workflow_state?: XmlElem<string>;
	workflow_state_name?: XmlElem<string>;
	workflow_state_last_date?: XmlElem<Date>;
	get_workflow_state_name?(workflowDoc: IWTWorkflowTopElem): string;
	set_workflow_state_last_date?(param: any): void;
	add_workflow_log_entry?(param: any): void;
	is_workflow_init?: XmlElem<boolean>;
	workflow_fields?: XmlMultiElem<IWTWorkflowDataBaseWorkflowField>;
	workflow_log_entrys?: XmlMultiElem<IWTWorkflowDataBaseWorkflowLogEntry>;
	workflow_custom_states?: XmlMultiElem<IWTWorkflowDataBaseWorkflowCustomState>;
}

