import { IWTAccessBase, IWTAdminAccessBase, IWTCustomElemsBase, IWTDocInfo, IWTGameBonusBase, IWTKnowledgePartsBase, IWTPollItem, IWTPollQuestion, IWTPollReportViewer, ObjectCodeNameBase, XmlElem, XmlMultiElem } from "..";

export interface IPoll extends
  ObjectCodeNameBase,
  IWTCustomElemsBase,
  IWTAccessBase,
  IWTAdminAccessBase,
  IWTGameBonusBase,
  IWTKnowledgePartsBase,
  IWTDocInfo
{
  class?: XmlElem<string>;
  poll_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  end_date?: XmlElem<Date>;
  completed?: XmlElem<boolean>;
  is_main?: XmlElem<boolean>;
  is_one_time?: XmlElem<boolean>;
  is_anonymous?: XmlElem<boolean>;
  show_report?: XmlElem<boolean>;
  show_comments_in_report?: XmlElem<boolean>;
  report_viewers?: XmlMultiElem<IWTPollReportViewer>;
  is_multiple_select?: XmlElem<boolean>;
  columns_num?: XmlElem<number>;
  questions?: XmlMultiElem<IWTPollQuestion>;
  items?: XmlMultiElem<IWTPollItem>;
  allow_delete_poll_result?: XmlElem<boolean>;
  complete_message?: XmlElem<string>;
  adaptive_mode?(): string;
  complete_massege?: XmlElem<string>;
  processing_code?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;
  get_report_data?(): any;
  set_question_id?(fldQuestionIDTarget: any, fldItemParam: any, sItemTypeParam: any): any;
  set_value?(fldValueTarget: any): any;
}
