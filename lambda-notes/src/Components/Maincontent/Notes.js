import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Notes = (props) => {
	return (
		<StyledNoteWrapper>
			<StyledHeader>Your Notes:</StyledHeader>
			{props.notes.map((note) => {
				return (
					<StyledNoteContainer to={`/${note._id}/notes`} key={note._id}>
						<StyledH1>{note.title}</StyledH1>
						<p>{note.textBody}</p>
						<p>
							<StyledSpan>{note.tags}</StyledSpan>
						</p>
					</StyledNoteContainer>
				);
			})}
		</StyledNoteWrapper>
	);
};

export default Notes;

export const StyledNoteWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	max-width: 75%;
	border: 2px solid rgba(80, 80, 80, 0.3);
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	margin-left: 325px;
`;

export const StyledNoteContainer = styled(Link)`
	text-decoration: none;
	color: #000000;
	max-height: 200px;
	display: flex;
	padding: 15px;
	flex-direction: column;
	background-color: #ffffff;
	text-align: start;
	overflow: hidden;
	width: 18%;
	margin: 10px;
	border: 1px solid rgba(80, 80, 80, 0.3);
	transition: 0.5s ease-in-out;

	&:hover {
		cursor: pointer;
		background-color: rgba(200, 240, 200, 1);
		box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.41);
	}
`;

export const StyledH1 = styled.h1`
	margin: 0;
	font-size: 22px;
	border-bottom: 2px solid rgba(80, 80, 80, 0.3);
`;

export const StyledHeader = styled.h1`
	display: block;
	width: 100%;
	font-size: 20px;
	color: rgba(80, 80, 80, 0.7);
	margin: 0;
	padding-left: 10px;
	padding-bottom: 0;
	text-align: start;
`;

export const StyledSpan = styled.span`
	color: rgba(80, 80, 80, 0.7);
	padding: 10px;
`;

export const StyledModal = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 500px;
	height: 400px;
	z-index: 2;
`;
