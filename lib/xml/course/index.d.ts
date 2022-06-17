import { ObjectCodeNameBase, IWTCourseSettingsBase, IWTFileListBase, XmlElem, XmlMultiElem, IWTCoursePart, IWTPersonExpert, IDoc } from "..";

export interface ICourse extends
  ObjectCodeNameBase,
  IWTCourseSettingsBase,
  IWTFileListBase
{
  desc?: XmlElem<string>;
  status?: XmlElem<string>;
  win_width?: XmlElem<number>;
  win_height?: XmlElem<number>;
  disp_scrolling?: XmlElem<boolean>;
  resizable?: XmlElem<boolean>;
  struct_type?: XmlElem<string>;
  library_url?: XmlElem<string>;
  parts?: XmlMultiElem<IWTCoursePart>;
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
  persons?: XmlMultiElem<IWTPersonExpert>;
  default_response_type_id?: XmlElem<number>;
  mandatory_fill_response?: XmlElem<boolean>;
  allow_disp_response?: XmlElem<boolean>;
  cl_course_id?: XmlElem<number>;
  version?: XmlElem<string>;
  price?: XmlElem<number>;
  pwt_disp?: XmlElem<boolean>;
  import_type?: XmlElem<string>;
  education_org_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  get_part_code?(): string;
  Width?(partCode: string): number;
  Height?(partCode: string): number;
  DispScrolling?(partCode: string): boolean;
  Resizable?(partCode: string): boolean;
  get_workflow_id?(): null;
  get_pwt_info?(source: XmlElem<any>): IDoc<unknown>;
  GetPartUrl?(partCode: string, index: number): string;
}
