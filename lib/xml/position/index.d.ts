import { IWTFileListBase, IWTDocInfo, IWTCustomElemsBase, XmlElem, XmMultiElem, IWTPositionCompetenceProfile, XmlMultiElem, IWTPositionKPIProfile } from "..";

export interface IPosition extends
  IWTFileListBase,
  IWTDocInfo,
  IWTCustomElemsBase
{
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  org_id?: XmlElem<number>;
  parent_object_id?: XmlElem<number>;
  basic_collaborator_id?: XmlElem<number>;
  basic_rate?: XmlElem<number>;
  is_boss?: XmlElem<boolean>;
  position_date?: XmlElem<Date>;
  cost_month?: XmlElem<number>;
  currency?: XmlElem<string>;
  competence_profile_id?: XmlElem<number>;
  competence_profiles?: XmMultiElem<IWTPositionCompetenceProfile>;
  competence_codes?: XmlElem<string>;
  kpi_profile_id?: XmlElem<number>;
  kpi_profiles?: XmlMultiElem<IWTPositionKPIProfile>;
  bonus_profile_id?: XmlElem<number>;
  knowledge_profile_id?: XmlElem<number>;
  position_common_id?: XmlElem<number>;
  position_common_level_id?: XmlElem<number>;
  position_common_level_name?: XmlElem<string>;
  position_family_id?: XmlElem<number>;
  position_finish_date?: XmlElem<Date>;
  is_position_finished?: XmlElem<boolean>;
  position_assignment_type?: XmlElem<string>;
  position_appointment_type_id?: XmlElem<number>;
  staff_position_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
}
