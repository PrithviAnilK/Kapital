import styled from 'styled-components';

export default styled.a`
    text-decoration: none;
    color: white;
    font-size: 27.5px;
    &:hover {
        color: #1890ff;
    }
    @media (max-width: 768px) {
        font-size: 25px;
	}
`;