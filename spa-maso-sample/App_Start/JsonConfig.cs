using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace SpaMasoSample
{
    public class JsonConfig
    {
        public static void RegisterConfig(HttpConfiguration config)
        {
            // only server json format, not xml format
            config.Formatters.Remove(config.Formatters.XmlFormatter);

            // Convert model property name style into camelcase
            var json = config.Formatters.JsonFormatter;
            json.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            // resolve self referencing loop detected error
            json.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;

            // register global model validation filter
            config.Services.RemoveAll(typeof(System.Web.Http.Validation.ModelValidatorProvider), v => v is System.Web.Http.Validation.Providers.InvalidModelValidatorProvider);
            config.Filters.Add(new ValidationActionFilter());
        }
    }
}