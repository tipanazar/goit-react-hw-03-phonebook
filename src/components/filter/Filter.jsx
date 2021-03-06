import PropTypes from 'prop-types';

const Filter = ({ typeContactData, filter }) => {
  return (
    <>
      <h4>Find contacts by name</h4>
      <input
        value={filter}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={typeContactData}
      />
    </>
  );
};

export default Filter;

Filter.defaultProps = {
  filter: '',
}

Filter.propTypes = {
  typeContactData: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
