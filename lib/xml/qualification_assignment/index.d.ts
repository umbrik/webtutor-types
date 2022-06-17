import { IWTPersonFillingBase, IWTFileListBase, IWTDocInfo, IWTAdminAccessBase, IWTCustomElemsBase, XmlElem, IWTQualificationAssignmentLearning, IWTQualificationAssignmentTestLearning, IWTQualificationAssignmentEducationMethod } from "..";

interface IWTQualificationAssignmentTopElem extends
  IWTPersonFillingBase,
  IWTFileListBase,
  IWTDocInfo,
  IWTAdminAccessBase,
  IWTCustomElemsBase
{
  assignment_date?: XmlElem<Date>;
  expiration_date?: XmlElem<Date>;
  plan_end_date?: XmlElem<Date>;
  reason?: XmlElem<string>;
  status?: XmlElem<string>;
  qualification_id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  event_id?: XmlElem<number>;
  learnings?: XmlElem<IWTQualificationAssignmentLearning>;
  test_learnings?: XmlElem<IWTQualificationAssignmentTestLearning>;
  education_methods?: XmlElem<IWTQualificationAssignmentEducationMethod>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
}
