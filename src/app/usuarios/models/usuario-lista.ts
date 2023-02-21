export class UsuarioLista {
  
  avatar_url: String;
  events_url: String;
  followers_url: String;
  following_url: String;
  gists_url: String;
  gravatar_id: String;
  html_url: String;
  id: String;
  login: String;
  node_id: String;
  organizations_url: String;
  received_events_url: String;
  repos_url: String;
  score: String;
  site_admin: String;
  starred_url: String;
  subscriptions_url: String;
  type: String;
  url: String;

  constructor(_parameters: any) {

  this.avatar_url = (_parameters.id != null ? _parameters.id : undefined);
  this.events_url = (_parameters.id != null ? _parameters.id : undefined);
  this.followers_url = (_parameters.id != null ? _parameters.id : undefined);
  this.following_url = (_parameters.id != null ? _parameters.id : undefined);
  this.gists_url = (_parameters.id != null ? _parameters.id : undefined);
  this.gravatar_id = (_parameters.id != null ? _parameters.id : undefined);
  this.html_url = (_parameters.id != null ? _parameters.id : undefined);
  this.id = (_parameters.id != null ? _parameters.id : undefined);
  this.login = (_parameters.id != null ? _parameters.id : undefined);
  this.node_id = (_parameters.id != null ? _parameters.id : undefined);
  this.organizations_url = (_parameters.id != null ? _parameters.id : undefined);
  this.received_events_url = (_parameters.id != null ? _parameters.id : undefined);
  this.repos_url = (_parameters.id != null ? _parameters.id : undefined);
  this.score = (_parameters.id != null ? _parameters.id : undefined);
  this.site_admin = (_parameters.id != null ? _parameters.id : undefined);
  this.starred_url = (_parameters.id != null ? _parameters.id : undefined);
  this.subscriptions_url = (_parameters.id != null ? _parameters.id : undefined);
  this.type = (_parameters.id != null ? _parameters.id : undefined);
  this.url = (_parameters.id != null ? _parameters.id : undefined);    
  }
}
