interface CoursePartActivityState {
  activity_state_id?: XmlElem<number>;
  score?: XmlElem<number>;
  state_id?: XmlElem<number>;
}

interface CoursePartCompletedParentPart {
  part_code?: XmlElem<string>;
}

interface CoursePart {
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
  object_id?: XmlElem<number>;
  cl_module_view?: XmlElem<string>;
  cl_module_protocol?: XmlElem<string>;
  view?: XmlElem<ViewConditionsBase>;
  launch?: XmlElem<ViewConditionsBase>;
  activity_states?: XmlMultiElem<CoursePartActivityState>;
  completed_parent_parts?: XmlMultiElem<CoursePartCompletedParentPart>;
}

interface CourseView extends DescBase {
  part_index?: XmlElem<number>;
  knowledge_classifier_id?: XmlElem<number>;
  knowledge_sort_type_id?: XmlElem<string>;
}

interface CourseTopElem extends XmlTopElem<CourseDocument>, ObjectCodeNameBase, EstimationLevelsBase, CourseExpertsBase, CourseSettingsBase, CatalogListBase, FileListBase, KnowledgePartsBase, KnowledgePartsBaseOld, ProctoringBase, GameBonusBase, CustomElemsBase, AdminAccessBase {
  desc?: XmlElem<string>;
  status?: XmlElem<string>;
  win_width?: XmlElem<number>;
  win_height?: XmlElem<number>;
  disp_scrolling?: XmlElem<boolean>;
  resizable?: XmlElem<boolean>;
  struct_type?: XmlElem<string>;
  library_url?: XmlElem<string>;
  course_finish_redirect?: XmlElem<string>;
  course_finish_redirect_url?: XmlElem<string>;
  base_url?: XmlElem<string>;
  view_type?: XmlElem<string>;
  mastery_score?: XmlElem<number>;
  max_score?: XmlElem<number>;
  score_sum_type?: XmlElem<string>;
  score_sum_eval?: XmlElem<string>;
  yourself_start?: XmlElem<boolean>;
  finish_without_mastery_score?: XmlElem<boolean>;
  auto_finish?: XmlElem<boolean>;
  ignor_location?: XmlElem<boolean>;
  start_after_finish?: XmlElem<boolean>;
  no_url_info?: XmlElem<boolean>;
  disp_folder_desc?: XmlElem<boolean>;
  duration?: XmlElem<number>;
  no_encoding_core_lesson?: XmlElem<boolean>;
  not_use_default_notification?: XmlElem<boolean>;
  default_response_type_id?: XmlElem<number>;
  mandatory_fill_response?: XmlElem<boolean>;
  allow_disp_response?: XmlElem<boolean>;
  cl_course_id?: XmlElem<number>;
  version?: XmlElem<string>;
  price?: XmlElem<number>;
  pwt_disp?: XmlElem<boolean>;
  import_type?: XmlElem<string>;
  education_org_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;
  parts?: XmlMultiElem<CoursePart>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<CourseView>;
  get_part_code?(): any;
  Width?(): any;
  Height?(): any;
  DispScrolling?(): any;
  Resizable?(): any;
  get_workflow_id?(): any;
  get_pwt_info?(): any;
  GetPartUrl?(): any;
  get_info?(): any;
}

type CourseDocument = XmlDocument<CourseTopElem>;
