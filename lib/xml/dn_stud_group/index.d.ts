interface DnStudGroupSubfaculty {
  subfac_id?: XmlElem<number>;
}

interface DnStudGroupTopElem extends XmlTopElem<DnStudGroupDocument>, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  stream_id?: XmlElem<number>;
  status_id?: XmlElem<string>;
  academ_year_id?: XmlElem<number>;
  special_id?: XmlElem<number>;
  specialization_id?: XmlElem<number>;
  qualification_id?: XmlElem<number>;
  faculty?: XmlElem<number>;
  group_size?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  subfacultys?: XmlMultiElem<DnStudGroupSubfaculty>;
}

type DnStudGroupDocument = XmlDocument<DnStudGroupTopElem>;
