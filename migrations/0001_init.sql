-- Migration number: 0001 	 2026-02-14T19:31:08.645Z
CREATE TABLE Promos (
	id TEXT PRIMARY KEY,
	icon_url TEXT NOT NULL,
	title TEXT NOT NULL,
	cta_label TEXT DEFAULT 'Learn More',
	cta_url TEXT NOT NULL,
	background_color_css_var TEXT NOT NULL,
	foreground_color_css_var TEXT NOT NULL
);


