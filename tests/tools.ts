const collaboratorId = UniqueID();
const collaborator = tools.open_doc<CollaboratorDocument>(collaboratorId);
const collaborator2 = tools.new_doc_by_name<CollaboratorDocument>("collaborator");

if (collaborator !== undefined) {
  if (collaborator.TopElem.position_id.OptForeignElem !== undefined) {
    const foreignName = tools.get_foreign_field(collaborator.TopElem.position_id, "basic_rate", "");
    alert(foreignName);
  }
}

tools.object_filling(null, collaborator2.TopElem, collaboratorId, null);

tools.common_filling("collaborator", collaborator2.TopElem, collaboratorId);
tools.common_filling("collaborator", collaborator2.TopElem, collaboratorId, collaborator?.TopElem, true);

const authorizationLibrary = tools.get_object_assembly("Authorization");
authorizationLibrary.GetValidateADALWithTokenAttributes(
  "ad_server_tenant",
  "ad_clientid",
  "resourceId",
  "token",
  "properties",
  "stsDiscoveryEndPoint"
);

const cryptoPro = tools.get_object_assembly("CryptoPro");
cryptoPro.CloseStore();

tools.current_user_boss_type;
