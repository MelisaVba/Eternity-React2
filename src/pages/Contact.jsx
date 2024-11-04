import React from 'react'

function Contact() {
  return (
    <main>
    <section className="datos">
      <article className="registro">
        <h4>Registro</h4>
        <form action="#" method="GET">
      
          <label htmlFor="name">Nombre</label>
          <input type="text" name="nombre" id="name" placeholder="Ingrese su nombre" maxLength="15" minLength="3" required/>

          <label htmlFor="lastname">Apellido</label>
          <input type="text" name="apellido" id="lastname" placeholder="Ingrese su apellido" maxLength="15" minLength="3" required/>

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Ingrese su email" maxLength="15" minLength="6" required/>

          <label htmlFor="clave">Contraseña</label>
            <input type="password" name="clave" id="clave" placeholder="Ingrese su clave" maxLength="13" minLength="8" required /> {/* Cambié el id para evitar duplicados */}
        
          <label htmlFor="nacionalidad">Nacionalidad</label>
          <select name="nacionalidad" id="nacionalidad" required>
            <option value="">Selecione una opcion</option>
            <option value="AR">Alemania</option>
            <option value="AR">Argentina</option>
            <option value="AU">Australia</option>
            <option value="BO">Bolivia</option>
            <option value="BA">Brasil</option>
            <option value="CA">Canadá</option>
            <option value="CH">Chile</option>
            <option value="CI">China</option>
            <option value="CO">Colombia</option>
            <option value="CR">Croacia</option>
            <option value="DI">Dinamarca</option>
            <option value="ES">España</option>
            <option value="EU">Estados Unidos</option>
            <option value="FI">Finlandia</option>
            <option value="FR">Francia</option>
            <option value="GR">Grecia</option>
            <option value="IR">Irlanda</option>
            <option value="IT">Italia</option>
            <option value="NO">Noruega</option>
            <option value="PA">Paraguay</option>
            <option value="PO">Polonia</option>
            <option value="SU">Suecia</option>
            <option value="SI">Suiza</option>
            <option value="UR">Uruguay</option>
          </select>
        <div className="buttons1">
          <button className="buttonregistro" type="submit">Guardar</button>
        </div>

        </form>
      </article>
    
      
      <article className="contacto">
        <h4>Contacto</h4>
        <form action="#" method="GET">
    
          <label htmlFor="name">Nombre</label> 
          <input type="text" name="nombre" id="name" placeholder="Nombre y apellido" maxLength="30" minLength = "15" required />

          <label htmlFor="email">Email</label> 
          <input type="email" name="email" id="email" placeholder="Ingrese su email" maxLength="15" minLength ="9"required />

          <label htmlFor="clave">Contraseña</label> 
          <input type="password" name="clave" id="clave" placeholder="Ingrese su contraseña" maxLength="15" minLength ="9"required />

          <label htmlFor="mensaje">Mensaje</label> 
          <textarea name="mensaje" id="mensaje" rows="10"></textarea>

        <div className="buttons1">
          <button type="submit">Enviar</button>
          <button type="reset">Limpiar</button>
        </div>
        </form>
      </article>
    </section>
  </main>
  )
}

export default Contact;