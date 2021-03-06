interface ApplicationInstanceTopElem extends XmlTopElem<ApplicationInstanceDocument>, WebVariablesBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  status?: XmlElem<string>;
  application_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
}

type ApplicationInstanceDocument = XmlDocument<ApplicationInstanceTopElem>;
