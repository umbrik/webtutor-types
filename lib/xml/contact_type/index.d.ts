interface ContactTypeTopElem extends XmlTopElem<ContactTypeDocument>, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  changed?: XmlElem<boolean>;
  is_std?: XmlElem<boolean>;
}

type ContactTypeDocument = XmlDocument<ContactTypeTopElem>;
