import { XmlElem, XmlMultiElem, IWTLibraryMaterialFormat, IWTLibraryMaterialGroup, IWTLibraryMaterialSubscribedPerson, IWTLibraryMaterialPathSection } from "..";

export interface ILibraryMaterial {
  name?: XmlElem<string>;
  author?: XmlElem<string>;
  publisher?: XmlElem<string>;
  section_id?: XmlElem<number>;
  library_system_id?: XmlElem<number>;
  number?: XmlElem<string>;
  library_material_type_id?: XmlElem<number>;
  library_material_formats?: XmlMultiElem<IWTLibraryMaterialFormat>;
  year?: XmlElem<number>;
  isbn?: XmlElem<string>;
  state_id?: XmlElem<number>;
  file_name?: XmlElem<number>;
  online_video_prepared?: XmlElem<boolean>;
  use_old_format?: XmlElem<boolean>;
  online_video_quality?: XmlElem<string>;
  allow_download?: XmlElem<boolean>;
  allow_self_viewing?: XmlElem<boolean>;
  image?: XmlElem<number>;
  description?: XmlElem<string>;
  contents?: XmlElem<string>;
  is_need_admin_approval?: XmlElem<boolean>;
  is_closed?: XmlElem<boolean>;
  groups?: XmlMultiElem<IWTLibraryMaterialGroup>;
  subscribed_persons?: XmlMultiElem<IWTLibraryMaterialSubscribedPerson>;
  external_id?: XmlElem<string>;
  default_response_type_id?: XmlElem<number>;
  mandatory_fill_response?: XmlElem<boolean>;
  old_id?: XmlElem<number>;
  path_sections?: XmlMultiElem<IWTLibraryMaterialPathSection>;
  comment?: XmlElem<string>;
  filling_path_sections?(): XmlMultiElem<IWTLibraryMaterialPathSection>;
}
