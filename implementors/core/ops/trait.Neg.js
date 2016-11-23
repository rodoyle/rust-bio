(function() {var implementors = {};
implementors["void"] = [];implementors["ordered_float"] = ["impl&lt;T:&nbsp;<a class='trait' href='num_traits/float/trait.Float.html' title='num_traits::float::Float'>Float</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='ordered_float/struct.NotNaN.html' title='ordered_float::NotNaN'>NotNaN</a>&lt;T&gt;",];implementors["libc"] = [];implementors["num_complex"] = ["impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_traits/trait.Num.html' title='num_traits::Num'>Num</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num_complex/struct.Complex.html' title='num_complex::Complex'>Complex</a>&lt;T&gt;","impl&lt;'a,&nbsp;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_traits/trait.Num.html' title='num_traits::Num'>Num</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num_complex/struct.Complex.html' title='num_complex::Complex'>Complex</a>&lt;T&gt;",];implementors["num_bigint"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='enum' href='num_bigint/enum.Sign.html' title='num_bigint::Sign'>Sign</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num_bigint/struct.BigInt.html' title='num_bigint::BigInt'>BigInt</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num_bigint/struct.BigInt.html' title='num_bigint::BigInt'>BigInt</a>",];implementors["num_rational"] = ["impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_integer/trait.Integer.html' title='num_integer::Integer'>Integer</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;</span>","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_integer/trait.Integer.html' title='num_integer::Integer'>Integer</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;</span>",];implementors["num"] = ["impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/trait.Integer.html' title='num::Integer'>Integer</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;</span>","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/trait.Integer.html' title='num::Integer'>Integer</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num/struct.Complex.html' title='num::Complex'>Complex</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/trait.Num.html' title='num::Num'>Num</a></span>","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num/struct.Complex.html' title='num::Complex'>Complex</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/trait.Num.html' title='num::Num'>Num</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num/struct.BigUint.html' title='num::BigUint'>BigUint</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num/struct.BigUint.html' title='num::BigUint'>BigUint</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='enum' href='num_bigint/bigint/enum.Sign.html' title='num_bigint::bigint::Sign'>Sign</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num/struct.BigInt.html' title='num::BigInt'>BigInt</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num/struct.BigInt.html' title='num::BigInt'>BigInt</a>",];implementors["nalgebra"] = ["impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec.html' title='nalgebra::DVec'>DVec</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec1.html' title='nalgebra::DVec1'>DVec1</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec2.html' title='nalgebra::DVec2'>DVec2</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec3.html' title='nalgebra::DVec3'>DVec3</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec4.html' title='nalgebra::DVec4'>DVec4</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec5.html' title='nalgebra::DVec5'>DVec5</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec6.html' title='nalgebra::DVec6'>DVec6</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec1.html' title='nalgebra::Vec1'>Vec1</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec2.html' title='nalgebra::Vec2'>Vec2</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec3.html' title='nalgebra::Vec3'>Vec3</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec4.html' title='nalgebra::Vec4'>Vec4</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec5.html' title='nalgebra::Vec5'>Vec5</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec6.html' title='nalgebra::Vec6'>Vec6</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Pnt1.html' title='nalgebra::Pnt1'>Pnt1</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Pnt2.html' title='nalgebra::Pnt2'>Pnt2</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Pnt3.html' title='nalgebra::Pnt3'>Pnt3</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Pnt4.html' title='nalgebra::Pnt4'>Pnt4</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Pnt5.html' title='nalgebra::Pnt5'>Pnt5</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Pnt6.html' title='nalgebra::Pnt6'>Pnt6</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Quat.html' title='nalgebra::Quat'>Quat</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec0.html' title='nalgebra::Vec0'>Vec0</a>&lt;N&gt;",];implementors["bio"] = ["impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/vec/struct.Vec0.html' title='nalgebra::structs::vec::Vec0'>Vec0</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt;</span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/dvec/struct.DVec.html' title='nalgebra::structs::dvec::DVec'>DVec</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/dvec/struct.DVec1.html' title='nalgebra::structs::dvec::DVec1'>DVec1</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/dvec/struct.DVec2.html' title='nalgebra::structs::dvec::DVec2'>DVec2</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/dvec/struct.DVec3.html' title='nalgebra::structs::dvec::DVec3'>DVec3</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/dvec/struct.DVec4.html' title='nalgebra::structs::dvec::DVec4'>DVec4</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/dvec/struct.DVec5.html' title='nalgebra::structs::dvec::DVec5'>DVec5</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/dvec/struct.DVec6.html' title='nalgebra::structs::dvec::DVec6'>DVec6</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/vec/struct.Vec1.html' title='nalgebra::structs::vec::Vec1'>Vec1</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt;</span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/vec/struct.Vec2.html' title='nalgebra::structs::vec::Vec2'>Vec2</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt;</span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/vec/struct.Vec3.html' title='nalgebra::structs::vec::Vec3'>Vec3</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt;</span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/vec/struct.Vec4.html' title='nalgebra::structs::vec::Vec4'>Vec4</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt;</span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/vec/struct.Vec5.html' title='nalgebra::structs::vec::Vec5'>Vec5</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt;</span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/vec/struct.Vec6.html' title='nalgebra::structs::vec::Vec6'>Vec6</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt;</span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/pnt/struct.Pnt1.html' title='nalgebra::structs::pnt::Pnt1'>Pnt1</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt;</span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/pnt/struct.Pnt2.html' title='nalgebra::structs::pnt::Pnt2'>Pnt2</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt;</span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/pnt/struct.Pnt3.html' title='nalgebra::structs::pnt::Pnt3'>Pnt3</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt;</span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/pnt/struct.Pnt4.html' title='nalgebra::structs::pnt::Pnt4'>Pnt4</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt;</span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/pnt/struct.Pnt5.html' title='nalgebra::structs::pnt::Pnt5'>Pnt5</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt;</span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/pnt/struct.Pnt6.html' title='nalgebra::structs::pnt::Pnt6'>Pnt6</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt;</span>","impl&lt;N&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/structs/quat/struct.Quat.html' title='nalgebra::structs::quat::Quat'>Quat</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt;</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_integer/trait.Integer.html' title='num_integer::Integer'>Integer</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;</span>","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_integer/trait.Integer.html' title='num_integer::Integer'>Integer</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num_complex/struct.Complex.html' title='num_complex::Complex'>Complex</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_traits/trait.Num.html' title='num_traits::Num'>Num</a></span>","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num_complex/struct.Complex.html' title='num_complex::Complex'>Complex</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_traits/trait.Num.html' title='num_traits::Num'>Num</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='ordered_float/struct.NotNaN.html' title='ordered_float::NotNaN'>NotNaN</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='num_traits/float/trait.Float.html' title='num_traits::float::Float'>Float</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num_bigint/biguint/struct.BigUint.html' title='num_bigint::biguint::BigUint'>BigUint</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num_bigint/biguint/struct.BigUint.html' title='num_bigint::biguint::BigUint'>BigUint</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='enum' href='num_bigint/bigint/enum.Sign.html' title='num_bigint::bigint::Sign'>Sign</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num_bigint/bigint/struct.BigInt.html' title='num_bigint::bigint::BigInt'>BigInt</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num_bigint/bigint/struct.BigInt.html' title='num_bigint::bigint::BigInt'>BigInt</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
