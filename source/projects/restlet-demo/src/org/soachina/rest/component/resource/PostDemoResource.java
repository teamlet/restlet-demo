package org.soachina.rest.component.resource;

import org.restlet.data.Status;
import org.restlet.representation.Representation;
import org.restlet.representation.StringRepresentation;
import org.restlet.resource.Post;
import org.restlet.resource.ServerResource;

public class PostDemoResource extends ServerResource {
	
	@Post
	public Representation post(String parameters) {
		getResponse().setStatus(Status.SUCCESS_OK);
		return new StringRepresentation("*** Post Method Done!" + parameters);
	}
}
