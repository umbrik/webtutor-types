import { ObjectCodeNameBase, IWTCustomElemsBase, IWTLectorsBase, IWTFileListBase, IWTKnowledgePartsBase, IWTDocInfo, IWTAdminAccessBase, IWTAccessBase, XmlElem, IWTCompoundProgramProgram, XmlMultiElem, IResultActivateProgramToPerson } from "..";

export interface ICompoundProgram extends
  ObjectCodeNameBase,
  IWTCustomElemsBase,
  IWTLectorsBase,
  IWTFileListBase,
  IWTKnowledgePartsBase,
  IWTDocInfo,
  IWTAdminAccessBase,
  IWTAccessBase
{
  desc?: XmlElem<string>;
  min_person_num?: XmlElem<number>;
  programs?: XmlElem<IWTCompoundProgramProgram>;
  comment?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;
  activate_program_to_person?(inputParam: Object): IResultActivateProgramToPerson;
}
