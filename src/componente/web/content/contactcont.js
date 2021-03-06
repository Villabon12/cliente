import React from 'react';

const Contactcont = (props)=>{
    return(
        <>
        <div id="fh5co-contact" class="fh5co-section animate-box">
		    <div class="container">
			    <div class="row animate-box">
				    <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
					    <h2>También tenemos linea de wsp</h2>
					    <p>Siempre tendrás linea caliente con nuestras operadoras</p>
					    <p><a href="https://api.whatsapp.com/send?phone=+573162418137&text=Bienvenidos%20a%20nuestra%20lÃ­nea%20de%20WhatsApp.%20En%20breve%20nuestros%20asesores%20te%20responderÃ¡n.%20
                        " class="btn btn-primary btn-outline">Whatsapp</a></p>
				    </div>
			    </div>
            </div>
			
			<div class="row">
				<div class="col-md-6 col-md-push-6 col-sm-6 col-sm-push-6">
					<form action="#" id="form-wrap">
						<div class="row form-group">
							<div class="col-md-12">
								<label for="name">Nombre</label>
								<input type="text" class="form-control" id="name"/>
							</div>
						</div>
						<div class="row form-group">
							<div class="col-md-12">
								<label for="email">Correo</label>
								<input type="text" class="form-control" id="email"/>
							</div>
						</div>
						<div class="row form-group">
							<div class="col-md-12">
								<label for="message">Mensaje</label>
								<textarea name="" id="message" cols="30" rows="10" class="form-control"></textarea>
							</div>
						</div>
						<div class="row form-group">
							<div class="col-md-12">
								<input type="submit" class="btn btn-primary btn-outline btn-lg" value="Enviar"/>
							</div>
						</div>

					</form>
				</div>
			</div>

		</div>
        </>
    );
}

export default Contactcont;