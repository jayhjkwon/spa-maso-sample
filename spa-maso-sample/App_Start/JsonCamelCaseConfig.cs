using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace SpaMasoSample
{
    public class JsonCamelCaseConfig
    {
        public static void RegisterConfig(HttpConfiguration config)
        {
            // only server json format, not xml format
            config.Formatters.Remove(config.Formatters.XmlFormatter);       

            // Convert model property name style into camelcase
            var json = config.Formatters.JsonFormatter;
            json.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            // resolve self referencing loop detected error
            json.SerializerSettings.PreserveReferencesHandling = PreserveReferencesHandling.Objects;
        }
    }
}