import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';
import Error from './ErrorMessage';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION($email: String!, $email: token!, $password: String!) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;

export default function Reset({ token }) {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    token,
  });

  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
  });

  const successfulError = data?.redeemUserPasswordResetToken.code
    ? data?.redeemUserPasswordResetToken
    : undefined;

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await reset().catch(console.error);
    console.log(res);
    resetForm();
  }

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <h2>Reset your password</h2>
      <Error error={error || successfulError} />
      <fieldset>
        {data?.redeemUserPasswordResetToken === null && (
          <p>Success! Your password is reset.</p>
        )}
        <label htmlFor="email">
          Email
          <input 
            type="email"
            name="email" 
            placeholder="email"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          New Password
          <input 
            type="password"
            name="password"
            placeholder="password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Reset</button>
      </fieldset>
    </Form>
  );
}
