import React from "react";
import './Feedback.css'

const initialFormData = Object.freeze({
	firstname: "",
	lastname: "",
	email:"",
	phonenumber:"",
	message:""
  });

export default function Feedback() {
	const [formData, updateFormData] = React.useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,

			// Trimming any whitespace
			[e.target.name]: e.target.value.trim()
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(formData);
		// ... submit to API or something
	};

	return (
		<div className="header">
			<h2 className="FormText">We look forward to hearing from you!</h2>
			<div className="FormHeader"><form>
				<div className="large-group">
					<div className="small-group">
						<label htmlFor="firstname">First Name</label>
						<input id="firstname" type="text" name="firstname" onChange={handleChange}/>
					</div>

					<div className="small-group">
						<label htmlFor="lastname">Last Name</label>
						<input htmlFor="lastname" type="text" name="lastname" onChange={handleChange}/>
					</div>

					<div className="small-group">
						<label htmlFor="email">Email</label>
						<input id="email" type="email" name="email" onChange={handleChange}/>
					</div>

					<div className="small-group">
						<label htmlFor="phonenumber">Phone Number</label>
						<input id="phonenumber" type="tel" name="phonenumber" onChange={handleChange}/>
					</div>

					<div className="textarea-div">
						<label htmlFor="message">Message</label>
						<textarea id="message" type="text" name="message" onChange={handleChange}></textarea>
					</div>

					<button id="submit" className="btn" type="submit" name="submit" onClick={handleSubmit}>SUBMIT</button>

				</div>
			</form></div>

			<div>
				<svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
					<defs>
						<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
					</defs>
					<g className="parallax">
						<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
						<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
						<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
						<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
					</g>
				</svg>
			</div>

		</div>
	);

}