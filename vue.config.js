/* para proyectos sin vue router
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '././' : './',
  };
*/

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/noveno_proyecto_cli_vue3_produccion/" : "/",
};