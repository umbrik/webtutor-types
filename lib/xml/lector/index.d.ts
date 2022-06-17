import { IWTPersonBase, IWTAdminAccessBase, IWTCustomElemsBase, IWTDocInfo, ObjectCodeNameBase, XmlElem, IWTLectorTypes } from "..";

interface ILector extends
  IWTPersonBase,
  IWTAdminAccessBase,
  IWTCustomElemsBase,
  IWTDocInfo,
  ObjectCodeNameBase
{
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  type?: XmlElem<IWTLectorTypes>;
  resource_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  person_position_name?: XmlElem<string>;
  person_subdivision_name?: XmlElem<string>;
  allow_publication?: XmlElem<boolean>;
  is_dismiss?: XmlElem<boolean>;
  lector_fullname?: XmlElem<string>;
}
