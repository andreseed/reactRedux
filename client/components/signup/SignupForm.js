import React from "react";
import timezones from "../../data/timezones";
import map from "lodash/map";
import PropTypes from "prop-types";
import classnames from "classnames";
import validateInput from "../../../server/shared/validations/signup";
import TextFieldGroup from "../common/TextFieldGroup";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.history.push("/");
        },
        ({ data }) => this.setState({ errors: data, isLoading: false })
      );
    }
  }

  render() {
    const { history } = this.props;
    const { errors } = this.state;
    const options = map(timezones, (val, key) => (
      <option key={val} value={val}>
        {key}
      </option>
    ));

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Cadastre seu login:</h1>

        <TextFieldGroup
          error={errors.username}
          label="Usuário"
          onChange={this.onChange}
          value={this.state.username}
          field="username"
        />

        <TextFieldGroup
          error={errors.email}
          label="E-mail"
          onChange={this.onChange}
          value={this.state.email}
          field="email"
          type="email"
        />

        <TextFieldGroup
          error={errors.password}
          label="Senha"
          onChange={this.onChange}
          value={this.state.password}
          type="password"
          field="password"
        />

        <TextFieldGroup
          error={errors.passwordConfirmation}
          label="Confirmação de Senha"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          type="password"
          field="passwordConfirmation"
        />

        <div className="form-group">
          <label className="control-label">Timezone</label>
          <select
            className="form-control"
            name="timezone"
            onChange={this.onChange}
            value={this.state.timezone}
          >
            <option value="">Escolha seu fuso horário</option>
            {options}
          </select>
        </div>

        <div className="form-group">
          <button
            disabled={this.state.isLoading}
            className="btn btn-primary btn-lg"
          >
            Entrar
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default SignupForm;
