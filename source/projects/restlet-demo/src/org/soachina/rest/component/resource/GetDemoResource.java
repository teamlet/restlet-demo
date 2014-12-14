package org.soachina.rest.component.resource;

import org.restlet.data.Status;
import org.restlet.representation.Representation;
import org.restlet.representation.StringRepresentation;
import org.restlet.resource.Get;
import org.restlet.resource.ServerResource;

public class GetDemoResource extends ServerResource {

	@Get
	public Representation get() {
		getResponse().setStatus(Status.SUCCESS_OK);
		return new StringRepresentation("*** Get Method Done!");
	}
}
