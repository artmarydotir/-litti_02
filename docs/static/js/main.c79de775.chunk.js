(this.webpackJsonpgitcard = this.webpackJsonpgitcard || []).push([
  [0],
  {
    63: function (e, t, a) {
      e.exports = a(90);
    },
    68: function (e, t, a) {},
    90: function (e, t, a) {
      'use strict';
      a.r(t);
      var r = a(0),
        s = a.n(r),
        n = a(8),
        i = a.n(n),
        o = (a(68), a(53)),
        l = a(26),
        u = a(27),
        c = a(31),
        h = a(30),
        m = a(127),
        p = a(129),
        g = a(133),
        b = a(124),
        d = a(131),
        f = a(130),
        v = a(134),
        _ = a(132),
        E = Object(b.a)({
          root: { maxWidth: 345, margin: '12px 18px' },
          media: { height: 180 },
        });
      function w(e) {
        var t = e,
          a = E();
        return s.a.createElement(
          m.a,
          { className: a.root },
          s.a.createElement(
            p.a,
            null,
            s.a.createElement(f.a, {
              className: a.media,
              image: t.avatar_url,
              title: t.name,
            }),
            s.a.createElement(
              d.a,
              null,
              s.a.createElement(
                _.a,
                { gutterBottom: !0, variant: 'h5', component: 'h2' },
                t.name
              ),
              s.a.createElement(
                _.a,
                { variant: 'body2', color: 'textSecondary', component: 'p' },
                t.bio
              )
            )
          ),
          s.a.createElement(
            g.a,
            null,
            s.a.createElement(
              v.a,
              { size: 'small', color: 'primary', href: t.url },
              'See Profile'
            ),
            s.a.createElement(
              v.a,
              { size: 'small', color: 'secondary' },
              'public repos: ',
              t.public_repos
            )
          )
        );
      }
      var y = a(135),
        j = Object(b.a)({ root: { flexGrow: 1 } });
      var N = function (e) {
          return (
            j(),
            s.a.createElement(
              y.a,
              {
                container: !0,
                direction: 'column',
                justify: 'center',
                alignItems: 'center',
                spacing: 3,
              },
              s.a.createElement(
                y.a,
                { container: !0, item: !0, xs: 12 },
                e.profiles.map(function (e) {
                  return s.a.createElement(
                    w,
                    Object.assign({}, e, { key: e.id })
                  );
                })
              )
            )
          );
        },
        x = a(33),
        O = a.n(x),
        C = a(51),
        S = a(139),
        z = a(52),
        M = a.n(z),
        k = (function (e) {
          Object(c.a)(a, e);
          var t = Object(h.a)(a);
          function a() {
            var e;
            Object(l.a)(this, a);
            for (var r = arguments.length, s = new Array(r), n = 0; n < r; n++)
              s[n] = arguments[n];
            return (
              ((e = t.call.apply(t, [this].concat(s))).state = {
                userName: '',
              }),
              (e.handleSubmit = (function () {
                var t = Object(C.a)(
                  O.a.mark(function t(a) {
                    var r;
                    return O.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              (a.preventDefault(),
                              console.log(e.state.userName),
                              !e.state.userName)
                            ) {
                              t.next = 10;
                              break;
                            }
                            return (
                              (t.next = 5),
                              M.a.get(
                                'https://api.github.com/users/'.concat(
                                  e.state.userName
                                )
                              )
                            );
                          case 5:
                            (r = t.sent),
                              e.props.handleNewProfile(r.data),
                              e.setState({ userName: '' }),
                              (t.next = 11);
                            break;
                          case 10:
                            alert('empty string? really?');
                          case 11:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()),
              e
            );
          }
          return (
            Object(u.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this;
                  return s.a.createElement(
                    'form',
                    {
                      action: '',
                      onSubmit: this.handleSubmit,
                      noValidate: !0,
                      autoComplete: 'off',
                    },
                    s.a.createElement(S.a, {
                      variant: 'outlined',
                      label: 'Github Username',
                      value: this.state.userName,
                      onChange: function (t) {
                        return e.setState({ userName: t.target.value });
                      },
                    }),
                    s.a.createElement(
                      v.a,
                      { type: 'submit', color: 'primary', variant: 'outlined' },
                      'Add New Card'
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.Component),
        A = a(136),
        T = a(137),
        D = Object(b.a)({
          centerBtn: { textAlign: 'center', margin: '0 auto' },
          barHeight: { padding: '10px 0' },
        });
      function P() {
        var e = D();
        return s.a.createElement(
          'div',
          null,
          s.a.createElement(
            A.a,
            { position: 'static', color: 'secondary' },
            s.a.createElement(
              T.a,
              { className: e.barHeight },
              s.a.createElement(
                _.a,
                { variant: 'h4', color: 'inherit', className: e.centerBtn },
                'The Github Cards'
              )
            )
          )
        );
      }
      var B = a(138),
        G = [
          {
            avatar_url: 'https://avatars0.githubusercontent.com/u/11363931?v=4',
            bio: '/* no bio */',
            blog: '',
            company: null,
            html_url: 'https://github.com/artmarydotir',
            id: 11363931,
            name: 'Art Mary',
            public_repos: 37,
            url: 'https://api.github.com/users/artmarydotir',
          },
          {
            login: 'shentao',
            id: 3737591,
            node_id: 'MDQ6VXNlcjM3Mzc1OTE=',
            avatar_url: 'https://avatars0.githubusercontent.com/u/3737591?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/shentao',
            html_url: 'https://github.com/shentao',
            followers_url: 'https://api.github.com/users/shentao/followers',
            following_url:
              'https://api.github.com/users/shentao/following{/other_user}',
            gists_url: 'https://api.github.com/users/shentao/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/shentao/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/shentao/subscriptions',
            organizations_url: 'https://api.github.com/users/shentao/orgs',
            repos_url: 'https://api.github.com/users/shentao/repos',
            events_url: 'https://api.github.com/users/shentao/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/shentao/received_events',
            type: 'User',
            site_admin: !1,
            name: 'Damian Dulisz',
            company: '@vuejs',
            blog: 'https://dulisz.com',
            location: 'Wroc\u0142aw',
            email: null,
            hireable: null,
            bio:
              '@vuejs core team. Lead Engineer at Coursedog.\r\nCurator of news.vuejs.org. Coffee lover. Occasional photographer.',
            public_repos: 49,
            public_gists: 3,
            followers: 710,
            following: 4,
            created_at: '2013-03-01T11:46:16Z',
            updated_at: '2020-04-07T11:28:19Z',
          },
          {
            login: 'mhf-ir',
            id: 1172526,
            node_id: 'MDQ6VXNlcjExNzI1MjY=',
            avatar_url: 'https://avatars1.githubusercontent.com/u/1172526?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/mhf-ir',
            html_url: 'https://github.com/mhf-ir',
            followers_url: 'https://api.github.com/users/mhf-ir/followers',
            following_url:
              'https://api.github.com/users/mhf-ir/following{/other_user}',
            gists_url: 'https://api.github.com/users/mhf-ir/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mhf-ir/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mhf-ir/subscriptions',
            organizations_url: 'https://api.github.com/users/mhf-ir/orgs',
            repos_url: 'https://api.github.com/users/mhf-ir/repos',
            events_url: 'https://api.github.com/users/mhf-ir/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mhf-ir/received_events',
            type: 'User',
            site_admin: !1,
            name: 'Muhammad Hussein Fattahizadeh',
            company: '@AASAAM ',
            blog: 'http://mhf.ir/',
            location: 'Iran, Tehran',
            email: null,
            hireable: null,
            bio: null,
            public_repos: 28,
            public_gists: 7,
            followers: 32,
            following: 84,
            created_at: '2011-11-04T14:19:36Z',
            updated_at: '2020-02-01T20:14:58Z',
          },
        ],
        I = (function (e) {
          Object(c.a)(a, e);
          var t = Object(h.a)(a);
          function a(e) {
            var r;
            return (
              Object(l.a)(this, a),
              ((r = t.call(this, e)).addNewProfile = function (e) {
                console.log(e),
                  r.setState(function (t) {
                    return {
                      profiles: [].concat(Object(o.a)(t.profiles), [e]),
                    };
                  });
              }),
              (r.state = { profiles: G }),
              r
            );
          }
          return (
            Object(u.a)(a, [
              {
                key: 'render',
                value: function () {
                  return s.a.createElement(
                    B.a,
                    { maxWidth: 'xl' },
                    s.a.createElement(P, null),
                    s.a.createElement(k, {
                      handleNewProfile: this.addNewProfile,
                    }),
                    s.a.createElement(N, { profiles: this.state.profiles })
                  );
                },
              },
            ]),
            a
          );
        })(s.a.Component);
      i.a.render(
        s.a.createElement(
          s.a.StrictMode,
          null,
          s.a.createElement(I, { title: 'The Github Cards' })
        ),
        document.getElementById('root')
      );
    },
  },
  [[63, 1, 2]],
]);
//# sourceMappingURL=main.c79de775.chunk.js.map
